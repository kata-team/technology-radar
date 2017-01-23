import EventEmitter from 'events';
import _ from 'underscore';
import rest from 'rest';
import mime from 'rest/interceptor/mime';
import AppDispatcher from '../dispatcher/AppDispatcher';
import SearchConstants from '../constants/SearchConstants';
import Item from '../class/Item';

const client = rest.wrap(mime);
const EVENTS = {
    CHANGE_RESULT: 'CHANGE_RESULT',
};
const items = [];
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

const filterResult = (criteria) => {
    const value = criteria.toUpperCase();
    results = _.filter(items, (item) => {
        return item.name.toUpperCase().includes(value) || item.description.toUpperCase().includes(value) || item.status.toUpperCase().includes(value);
    });
    ItemsStore.emitChangeResult();
};

const load = (criteria) => {
    client('items.json').then((response) => {
        _.map(response.entity, (item) => {
            items.push(new Item(item));
        });
        filterResult(criteria);
    });
};

const search = (criteria) => {
    if (_.isEmpty(items)) {
        load(criteria);
    } else {
        filterResult(criteria);
    }
};

AppDispatcher.register((action) => {
    switch (action.actionType) {
    case SearchConstants.CHANGE_CRITERIA:
        search(action.criteria);
        break;
    default:
        // no op
        break;
    }
});

export default ItemsStore;
