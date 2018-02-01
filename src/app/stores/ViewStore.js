import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ViewConstants from '../constants/ViewConstants';

class ViewStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return {
            view: ViewConstants.VIEW_GRID,
        };
    }

    reduce(state, action) {
        switch (action.type) {
        case ViewConstants.VIEW_GRID:
            return {
                view: ViewConstants.VIEW_GRID,
            };
        case ViewConstants.VIEW_LIST:
            return {
                view: ViewConstants.VIEW_LIST,
            };
        default:
            return state;
        }
    }
}

export default new ViewStore();
