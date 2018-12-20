import { ReduceStore } from 'flux/utils';
import _ from 'lodash';
import AppDispatcher from '../dispatcher/AppDispatcher';
import SearchConstants from '../constants/SearchConstants';

const memo = {
    query: '',
    items: [],
    categories: [],
    statuses: [],
    tags: [],
};

const groupByCategories = (items) => {
    const groupedItems = _.groupBy(items, (item) => {
        return item.category.name;
    });

    return _.map(groupedItems, (elms) => {
        return {
            items: elms,
            category: elms[0].category,
        };
    });
};

const updateResultCategories = () => {
    const categories = _.groupBy(memo.items, (item) => {
        return item.category.name;
    });

    return _.keys(categories);
};

const updateResultStatuses = () => {
    const statuses = _.groupBy(memo.items, (item) => {
        return item.status;
    });

    return _.keys(statuses);
};

const updateResultTags = () => {
    let tags = [];
    _.each(memo.items, (item) => {
        if (!_.isEmpty(item.tags)) {
            tags = _.union(tags, item.tags);
        }
    });

    return tags;
};

const updateResultItems = () => {
    const queryRegExp = new RegExp(memo.query, 'i');

    const items = _.filter(memo.items, (item) => {
        let result = queryRegExp.test(item.name) || queryRegExp.test(item.description) || item.comments.filter(c => queryRegExp.test(c.message)).length > 0;
        result = result && (memo.categories.length === 0 ? true : memo.categories.indexOf(item.category.name) >= 0);
        result = result && (memo.statuses.length === 0 ? true : memo.statuses.indexOf(item.status) >= 0);
        result = result && (memo.tags.length === 0 ? true : _.filter(memo.tags, (tag) => { return item.tags.indexOf(tag) >= 0 }).length > 0);
        return result;
    });

    return groupByCategories(items);
};

// toggle element from array
const toggleArrayElement = (arr, elm, add) => {
    if (add === undefined) {
        return _.indexOf(arr, elm) === -1 ? _.union(arr, [elm]) : _.without(arr, elm);
    }

    return add ? _.union(arr, [elm]) : _.without(arr, elm);
};

const changeItems = (items) => {
    memo.items = items;
    return {
        isSearching: false,
        categories: updateResultCategories(),
        statuses: updateResultStatuses(),
        tags: updateResultTags(),
        items: updateResultItems(),
    };
};

const filterItems = (state) => {
    const newState = state;
    newState.items = updateResultItems();
    return newState;
};


class ItemsStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return {
            isSearching: false,
            categories: [],
            statuses: [],
            tags: [],
            items: [],
        };
    }

    areEqual(one, two) {
        _.isEqual(one, two);
    }

    reduce(state, action) {
        switch (action.type) {
        case SearchConstants.START_SEARCHING:
            state.isSearching = true;
            break;
        case SearchConstants.CHANGE_ITEMS:
            return changeItems(action.value);
        case SearchConstants.CHANGE_QUERY:
            memo.query = action.value;
            break;
        case SearchConstants.CHANGE_CATEGORY:
            memo.categories = toggleArrayElement(memo.categories, action.value.value, action.value.checked);
            break;
        case SearchConstants.CHANGE_STATUS:
            memo.statuses = toggleArrayElement(memo.statuses, action.value.value, action.value.checked);
            break;
        case SearchConstants.CHANGE_TAG:
            memo.tags = toggleArrayElement(memo.tags, action.value.value, action.value.checked);
            break;
        default:
            return state;
        }

        return Object.assign({}, filterItems(state));
    }
}

export default new ItemsStore();
