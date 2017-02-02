import React, { Component } from 'react';
import SearchActions from '../actions/SearchActions';

export default class SearchComponent extends Component {

    render() {
        return (
            <input type="search" placeholder="Search" className="uk-input uk-width-1-4@s" onChange={(event) => { SearchActions.changeCriteria(event.target.value) }} />
        );
    }

}
