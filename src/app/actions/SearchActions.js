import AppDispatcher from '../dispatcher/AppDispatcher';
import SearchConstants from '../constants/SearchConstants';

export default {
    changeCriteria(_criteria) {
        AppDispatcher.dispatch({
            actionType: SearchConstants.CHANGE_CRITERIA,
            criteria: _criteria,
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
};
