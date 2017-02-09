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

    renderItems(items) {
        return _.map(items, (item, key) => (
            <div key={key} className="uk-grid-match uk-grid-margin">
                <ItemComponent item={item} />
            </div>
        ));
    }

    renderCategories() {
        return _.map(this.state.result, (items, category) => (
            <div key={category} data-category={category} className="uk-section">
                <div className="uk-container">

                    <div className="uk-panel uk-light uk-margin-medium">
                        <h3>{category}</h3>
                    </div>

                    <div className="uk-child-width-1-2@m uk-child-width-1-3@l uk-grid uk-grid-match">
                        { this.renderItems(items) }
                    </div>

                </div>
            </div>
        ));
    }

    render() {
        return (
            <div>
                { this.renderCategories() }
            </div>
        );
    }

}
