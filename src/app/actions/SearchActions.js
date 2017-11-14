import AppDispatcher from '../dispatcher/AppDispatcher';
import SearchConstants from '../constants/SearchConstants';
import Api from '../Api';

export default {
    load() {
        Api.load();
    },
    changeItems(items) {
        AppDispatcher.dispatch({
            type: SearchConstants.CHANGE_ITEMS,
            value: items,
        });
    },
    changeQuery(_query) {
        AppDispatcher.dispatch({
            type: SearchConstants.CHANGE_QUERY,
            value: _query,
        });
    },
    changeCategory(_target) {
        AppDispatcher.dispatch({
            type: SearchConstants.CHANGE_CATEGORY,
            value: _target,
        });
    },
    changeStatus(_target) {
        AppDispatcher.dispatch({
            type: SearchConstants.CHANGE_STATUS,
            value: _target,
        });
    },
    changeTag(_target) {
        AppDispatcher.dispatch({
            type: SearchConstants.CHANGE_TAG,
            value: _target,
        });
    },
};
