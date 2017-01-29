import React, { Component } from 'react';
import SearchComponent from './SearchComponent';

export default class NavbarComponent extends Component {

    render() {
        return (
            <nav className="uk-navbar-container uk-navbar-fixed uk-navbar-brand">
                <div className="uk-container">
                    <a href="">
                        <img alt="Technology Radar logo" src="images/logo.png" />
                        <h1>Technology Radar</h1>
                    </a>
                    <SearchComponent />
                </div>
            </nav>
        );
    }

}
