import AppDispatcher from '../dispatcher/AppDispatcher';
import SearchConstants from '../constants/SearchConstants';

export default {
    changeCriteria(_criteria) {
        AppDispatcher.dispatch({
            actionType: SearchConstants.CHANGE_CRITERIA,
            criteria: _criteria,
        });
    },
};
