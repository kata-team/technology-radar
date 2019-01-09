import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import Api from '../Api';

export default {
    load(spreadsheetId) {
        Api.load(spreadsheetId);
    },
    updateSettings(settings) {
        AppDispatcher.dispatch({
            type: AppConstants.UPDATE_SETTINGS,
            value: settings
        });
    },
    selectGrid() {
        AppDispatcher.dispatch({
            type: AppConstants.VIEW_GRID,
        });
    },
    selectList() {
        AppDispatcher.dispatch({
            type: AppConstants.VIEW_LIST,
        });
    },
};
