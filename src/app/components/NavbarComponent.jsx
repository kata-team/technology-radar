import React, { Component } from 'react';
import SearchComponent from './SearchComponent';
import ViewContainer from './ViewContainer';

export default class NavbarComponent extends Component {

    render() {
        return (
            <nav className="uk-navbar-container uk-navbar-fixed uk-navbar-brand">
                <div className="uk-container">
                    <a href="">
                        <img alt="Technology Radar logo" src="images/logo.png" />
                        <h1>Technology Radar</h1>
                    </a>
                    <div className="uk-search uk-width-1-4@s uk-align-right">
                        <SearchComponent />
                        <ViewContainer />
                    </div>
                </div>
            </nav>
        );
    }

}
