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
};

let results = [];

const ItemsStore = Object.assign({}, EventEmitter.prototype, {
    result() {
        return results;
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

const search = (criteria) => {
    itemsLoader.load(state.endpoint, (items) => {
        const rx = new RegExp(criteria, 'i');

        results = _.filter(items, (item) => {
            return rx.test(item.name) || rx.test(item.description);
        });

        results = groupByCategories(results);

        ItemsStore.emitChangeResult();
    });
};

AppDispatcher.register((action) => {
    switch (action.actionType) {
    case SearchConstants.CHANGE_CRITERIA:
        state.criteria = action.criteria;
        search(action.criteria);
        break;
    default:
        // no op
        break;
    }
});

export default ItemsStore;
