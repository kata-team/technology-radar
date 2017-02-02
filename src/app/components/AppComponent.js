import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import ResultComponent from './ResultComponent';

export default class AppComponent extends Component {

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
