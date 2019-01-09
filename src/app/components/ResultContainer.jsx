import React, { Component } from 'react';
import { Container } from 'flux/utils';
import ResultComponent from './ResultComponent';
import ItemsStore from '../stores/ItemsStore';
import AppStore from '../stores/AppStore';

class ResultContainer extends Component {

    static getStores() {
        return [ItemsStore, AppStore];
    }

    static calculateState() {
        return {
            itemsStore: ItemsStore.getState(),
            appStore: AppStore.getState(),
        };
    }

    render() {
        return <ResultComponent {...this.state}/>;
    }
}

export default Container.create(ResultContainer);
