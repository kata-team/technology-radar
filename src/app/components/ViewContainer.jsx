import React, { Component } from 'react';
import { Container } from 'flux/utils';
import ViewComponent from './ViewComponent';
import AppStore from '../stores/AppStore';

class ViewContainer extends Component {

    static getStores() {
        return [AppStore];
    }

    static calculateState() {
        return {
            appStore: AppStore.getState(),
        };
    }

    render() {
        return <ViewComponent {...this.state} />;
    }

}

export default Container.create(ViewContainer);
