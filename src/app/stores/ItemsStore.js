import EventEmitter from 'events';
import _ from 'underscore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import SearchConstants from '../constants/SearchConstants';
import ItemsLoader from '../class/ItemsLoader';

const itemsLoader = new ItemsLoader();

const EVENTS = {
    CHANGE_RESULT: 'CHANGE_RESULT',
};

const state = {
    endpoint: {
        type: 'SPREADSHEETS',
        url: 'https://spreadsheets.google.com/feeds/list/112MlfyXSlIQ8nae85Te_xWDBP136GRaYeHlDdKgYyPo/1/public/values?alt=json-in-script&callback={1}',
        // type: 'JSON',
        // url: 'items.json',
    },
    criteria: '',
    status: '',
};

const results = {
    items: [],
    status: [],
};

const ItemsStore = Object.assign({}, EventEmitter.prototype, {
    result() {
        return results.items;
    },
    statusList() {
        return results.status;
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

const groupByCategories = (items) => {
    return _.groupBy(items, (item) => {
        return item.category;
    });
};

const updateResultStatus = (items) => {
    const status = _.groupBy(items, (item) => {
        return item.status;
    });

    results.status = _.keys(status);
};

const search = () => {
    itemsLoader.load(state.endpoint, (items) => {
        updateResultStatus(items);

        const criteriaRegExp = new RegExp(state.criteria, 'i');

        results.items = _.filter(items, (item) => {
            return (criteriaRegExp.test(item.name) || criteriaRegExp.test(item.description)) && (state.status !== '' ? item.status === state.status : true);
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
    case SearchConstants.CHANGE_STATUS:
        state.status = action.status;
        search();
        break;
    default:
        // no op
        break;
    }
});

export default ItemsStore;
