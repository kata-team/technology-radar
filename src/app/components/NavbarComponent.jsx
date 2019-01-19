import React, { Component } from 'react';
import SearchComponent from './SearchComponent';
import ViewContainer from './ViewContainer';

export default class NavbarComponent extends Component {

    render() {
        return (
            <nav className="uk-navbar-container uk-navbar-fixed uk-navbar-brand">
                <div className="uk-container">
                    <a href="./">
                        <img alt="Technology Radar logo" src={this.props.appStore.settings.logo} />
                        <h1>{this.props.appStore.settings.name}</h1>
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
