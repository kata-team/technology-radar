import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import ResultContainer from './ResultContainer';
import SearchActions from '../actions/SearchActions';

export default class AppComponent extends Component {

    componentDidMount() {
        SearchActions.load();
    }

    render() {
        return (
            <div className="app">
                <NavbarComponent />
                <ResultContainer />
            </div>
        );
    }

}
