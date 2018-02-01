import AppDispatcher from '../dispatcher/AppDispatcher';
import ViewConstants from '../constants/ViewConstants';

export default {
    selectGrid() {
        AppDispatcher.dispatch({
            type: ViewConstants.VIEW_GRID,
        });
    },
    selectLine() {
        AppDispatcher.dispatch({
            type: ViewConstants.VIEW_LIST,
        });
    },
};
