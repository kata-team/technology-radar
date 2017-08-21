import EventEmitter from 'events';
import _ from 'lodash';
import AppDispatcher from '../dispatcher/AppDispatcher';
import SearchConstants from '../constants/SearchConstants';
import ItemsLoader from '../class/ItemsLoader';
import Item from '../class/Item';

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
    tags: [],
};

const results = {
    items: [],
    categories: [],
    statuses: [],
    tags: [],
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
    tags() {
        return results.tags;
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

const updateResultTags = (items) => {
    results.tags = [];
    _.each(items, (item) => {
        if (!_.isEmpty(item.tags)) {
            results.tags = _.union(results.tags, item.tags);
        }
    });
};

const search = () => {
    itemsLoader.load(state.endpoint, Item, (items) => {
        updateResultCategories(items);
        updateResultStatuses(items);
        updateResultTags(items);

        const criteriaRegExp = new RegExp(state.criteria, 'i');

        results.items = _.filter(items, (item) => {
            let result = criteriaRegExp.test(item.name) || criteriaRegExp.test(item.description);
            result = result && (state.categories.length === 0 ? true : state.categories.indexOf(item.category) >= 0);
            result = result && (state.statuses.length === 0 ? true : state.statuses.indexOf(item.status) >= 0);
            result = result && (state.tags.length === 0 ? true : _.filter(state.tags, (tag) => { return item.tags.indexOf(tag) >= 0 }).length > 0);
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
    case SearchConstants.CHANGE_TAG:
        state.tags = toggleArrayElement(state.tags, action.target.value, action.target.checked);
        search();
        break;
    default:
        // no op
        break;
    }
});

export default ItemsStore;
