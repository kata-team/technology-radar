import React, { Component } from 'react';
import { Container } from 'flux/utils';
import ResultComponent from './ResultComponent';
import ItemsStore from '../stores/ItemsStore';
import ViewStore from '../stores/ViewStore';

class ResultContainer extends Component {

    static getStores() {
        return [ItemsStore, ViewStore];
    }

    static calculateState() {
        return {
            itemsStore: ItemsStore.getState(),
            viewStore: ViewStore.getState(),
        };
    }

    render() {
        return <ResultComponent {...this.state}/>;
    }
}

export default Container.create(ResultContainer);
