import EventEmitter from 'events';
import _ from 'underscore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import SearchConstants from '../constants/SearchConstants';
import ItemsLoader from '../class/ItemsLoader';

const itemsLoader = new ItemsLoader();

const EVENTS = {
    CHANGE_RESULT: 'CHANGE_RESULT',
};

const WORKSHEET_ID = '112MlfyXSlIQ8nae85Te_xWDBP136GRaYeHlDdKgYyPo';

const state = {
    endpoint: {
        type: 'SPREADSHEETS',
        url: `https://spreadsheets.google.com/feeds/list/${WORKSHEET_ID}/1/public/values?alt=json-in-script&callback={1}`,
        // type: 'JSON',
        // url: 'items.json',
    },
    criteria: '',
    categories: [],
    statuses: [],
};

const results = {
    items: [],
    categories: [],
    statuses: [],
};

const ItemsStore = Object.assign({}, EventEmitter.prototype, {
    result() {
        return results.items;
    },
    categories() {
        return results.categories;
    },
    statuses() {
        return results.statuses;
    },
    emitChangeResult() {
        this.emit(EVENTS.CHANGE_RESULT);
    },
    addChangeResultListener(callback) {
        this.on(EVENTS.CHANGE_RESULT, callback);
    },
    removeChangeResultListener(callback) {
        this.removeListener(EVENTS.CHANGE_RESULT, callback);
    },
});

const toggleArrayElement = (arr, elm, add) => {
    if (add === undefined) {
        return _.indexOf(arr, elm) === -1 ? _.union(arr, [elm]) : _.without(arr, elm);
    }

    return add ? _.union(arr, [elm]) : _.without(arr, elm);
};

const groupByCategories = (items) => {
    return _.groupBy(items, (item) => {
        return item.category;
    });
};

const updateResultCategories = (items) => {
    const categories = _.groupBy(items, (item) => {
        return item.category;
    });

    results.categories = _.keys(categories);
};

const updateResultStatuses = (items) => {
    const statuses = _.groupBy(items, (item) => {
        return item.status;
    });

    results.statuses = _.keys(statuses);
};

const search = () => {
    itemsLoader.load(state.endpoint, (items) => {
        updateResultCategories(items);
        updateResultStatuses(items);

        const criteriaRegExp = new RegExp(state.criteria, 'i');

        results.items = _.filter(items, (item) => {
            let result = criteriaRegExp.test(item.name) || criteriaRegExp.test(item.description);
            result = result && (state.categories.length === 0 ? true : state.categories.indexOf(item.category) >= 0);
            result = result && (state.statuses.length === 0 ? true : state.statuses.indexOf(item.status) >= 0);
            return result;
        });

        results.items = groupByCategories(results.items);

        ItemsStore.emitChangeResult();
    });
};

AppDispatcher.register((action) => {
    switch (action.actionType) {
    case SearchConstants.CHANGE_CRITERIA:
        state.criteria = action.criteria;
        search();
        break;
    case SearchConstants.CHANGE_CATEGORY:
        state.categories = toggleArrayElement(state.categories, action.target.value, action.target.checked);
        search();
        break;
    case SearchConstants.CHANGE_STATUS:
        state.statuses = toggleArrayElement(state.statuses, action.target.value, action.target.checked);
        search();
        break;
    default:
        // no op
        break;
    }
});

export default ItemsStore;
