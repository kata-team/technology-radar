import AppDispatcher from '../dispatcher/AppDispatcher';
import SearchConstants from '../constants/SearchConstants';

export default {
    changeQuery(_query) {
        AppDispatcher.dispatch({
            actionType: SearchConstants.CHANGE_QUERY,
            query: _query,
        });
    },
    changeCategory(_target) {
        AppDispatcher.dispatch({
            actionType: SearchConstants.CHANGE_CATEGORY,
            target: _target,
        });
    },
    changeStatus(_target) {
        AppDispatcher.dispatch({
            actionType: SearchConstants.CHANGE_STATUS,
            target: _target,
        });
    },
    changeTag(_target) {
        AppDispatcher.dispatch({
            actionType: SearchConstants.CHANGE_TAG,
            target: _target,
        });
    },
};
