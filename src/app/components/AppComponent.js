import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import ResultComponent from './ResultComponent';
import SearchActions from '../actions/SearchActions';

export default class AppComponent extends Component {

    componentDidMount() {
        SearchActions.changeCriteria('');
    }

    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="uk-container">
                    <ResultComponent />
                </div>
            </div>
        );
    }

}
