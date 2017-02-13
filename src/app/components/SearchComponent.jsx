import React, { Component } from 'react';
import _ from 'underscore';
import SearchActions from '../actions/SearchActions';
import ItemsStore from '../stores/ItemsStore';

export default class SearchComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { status: ItemsStore.statusList() };
    }

    componentDidMount() {
        ItemsStore.addChangeResultListener(this.onChangeResultHandler.bind(this));
    }

    componentWillUnmount() {
        ItemsStore.removeChangeResultListener(this.onChangeResultHandler.bind(this));
    }

    onChangeResultHandler() {
        this.setState({ status: ItemsStore.statusList() });
    }

    status() {
        return _.map(this.state.status, (status, key) => (
            <option key={key} value={status}>{status}</option>
        ));
    }

    render() {
        return (
            <div>
                <input type="search" placeholder="Search" className="uk-input uk-width-1-4@s" onChange={(event) => { SearchActions.changeCriteria(event.target.value) }} />
                <select className="uk-select uk-width-1-4@s" onChange={(event) => { SearchActions.changeStatus(event.target.value) }} >
                    <option value="">Please select...</option>
                    { this.status() }
                </select>
            </div>
        );
    }

}
