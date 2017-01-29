import React, { Component } from 'react';
import _ from 'underscore';
import ItemComponent from './ItemComponent';
import ItemsStore from '../stores/ItemsStore';

export default class ResultComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { result: ItemsStore.result() };
    }

    componentDidMount() {
        ItemsStore.addChangeResultListener(this.onChangeResultHandler.bind(this));
    }

    componentWillUnmount() {
        ItemsStore.removeChangeResultListener(this.onChangeResultHandler.bind(this));
    }

    onChangeResultHandler() {
        this.setState({ result: ItemsStore.result() });
    }

    get items() {
        return _.map(this.state.result, (item, key) => (
            <div key={key} className="uk-grid-match uk-grid-margin">
                <ItemComponent item={item} />
            </div>
        ));
    }

    render() {
        return (
            <div className="uk-child-width-1-2@m uk-child-width-1-3@l uk-grid uk-grid-match">
                {this.items}
            </div>
        );
    }

}
