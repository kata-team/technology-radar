import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

import Settings from '../class/Settings';

class AppStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return {
            view: AppConstants.VIEW_GRID,
            settings: new Settings({
                name: 'Technology Radar',
                logo: 'images/logo.png',
            })
        };
    }

    reduce(state, action) {
        switch (action.type) {
        case AppConstants.UPDATE_SETTINGS:
            return {
                ...state,
                settings: action.value,
            };
        case AppConstants.VIEW_GRID:
            return {
                ...state,
                view: AppConstants.VIEW_GRID,
            };
        case AppConstants.VIEW_LIST:
            return {
                ...state,
                view: AppConstants.VIEW_LIST,
            };
        default:
            return state;
        }
    }
}

export default new AppStore();
