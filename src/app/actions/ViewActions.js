import AppDispatcher from '../dispatcher/AppDispatcher';
import ViewConstants from '../constants/ViewConstants';

export default {
    selectGrid() {
        AppDispatcher.dispatch({
            type: ViewConstants.VIEW_GRID,
        });
    },
    selectList() {
        AppDispatcher.dispatch({
            type: ViewConstants.VIEW_LIST,
        });
    },
};
