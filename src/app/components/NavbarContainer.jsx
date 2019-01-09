import React, { Component } from 'react';
import { Container } from 'flux/utils';
import NavbarComponent from './NavbarComponent';
import AppStore from '../stores/AppStore';

class NavbarContainer extends Component {

    static getStores() {
        return [AppStore];
    }

    static calculateState() {
        return {
            appStore: AppStore.getState(),
        };
    }

    render() {
        return <NavbarComponent {...this.state} />;
    }

}

export default Container.create(NavbarContainer);
