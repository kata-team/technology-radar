import React, { Component } from 'react';
import { Container } from 'flux/utils';
import ViewComponent from './ViewComponent';
import ViewStore from '../stores/ViewStore';

class ViewContainer extends Component {

    static getStores() {
        return [ViewStore];
    }

    static calculateState() {
        return {
            viewStore: ViewStore.getState(),
        };
    }

    render() {
        return <ViewComponent {...this.state} />;
    }

}

export default Container.create(ViewContainer);
