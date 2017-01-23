import React, { Component } from 'react';
import SearchActions from '../actions/SearchActions';

export default class SearchComponent extends Component {

    render() {
        return (
            <form className="uk-form">
                <input type="search" placeholder="Search" className="uk-width-medium-1-4" onChange={(event) => { SearchActions.changeCriteria(event.target.value) }} />
            </form>
        );
    }

}
