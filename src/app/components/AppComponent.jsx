import React, { Component } from 'react';
import NavbarContainer from './NavbarContainer';
import ResultContainer from './ResultContainer';
import AppActions from '../actions/AppActions';

export default class AppComponent extends Component {

    componentDidMount() {
        const url = (new URL(window.location.href));
        AppActions.load(url.searchParams.get('id'));
    }

    render() {
        return (
            <div className="app">
                <NavbarContainer />
                <ResultContainer />
            </div>
        );
    }

}
