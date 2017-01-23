import React, { Component } from 'react';
import SearchComponent from './SearchComponent';
import ResultComponent from './ResultComponent';

export default class AppComponent extends Component {

    render() {
        return (
            <div className="uk-container uk-container-center">
                <div className="uk-grid uk-grid-margin">
                    <div className="uk-width-1">
                        <SearchComponent />
                        <br />
                        <ResultComponent />
                    </div>
                </div>
            </div>
        );
    }

}
