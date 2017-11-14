import React, { Component } from 'react';
import _ from 'lodash';
import ItemComponent from './ItemComponent';
import SpinnerComponent from './SpinnerComponent';
import ItemsStore from '../stores/ItemsStore';

export default class ResultComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsStore: ItemsStore.getState(),
        };
    }

    componentDidMount() {
        this.listener = ItemsStore.addListener(this.onChangeResultHandler.bind(this));
    }

    componentWillUnmount() {
        this.listener.remove();
    }

    onChangeResultHandler() {
        this.setState({
            itemsStore: ItemsStore.getState(),
        });
    }

    renderItems(items) {
        return _.map(items, (item, key) => (
            <div key={key} className="uk-grid-match uk-grid-margin">
                <ItemComponent item={item} />
            </div>
        ));
    }

    renderCategory(obj) {
        const categoryStyle = {
            background: obj.category.color,
        };

        return (
            <section key={obj.category.name} className="uk-section" style={categoryStyle}>
                <div className="uk-container">

                    <div className="uk-panel uk-light uk-margin-medium">
                        <h3>{obj.category.name}</h3>
                    </div>

                    <div className="uk-child-width-1-2@m uk-child-width-1-3@l uk-grid uk-grid-match">
                        { this.renderItems(obj.items) }
                    </div>

                </div>
            </section>
        );
    }

    renderCategories() {
        return this.state.itemsStore.items.length > 0 ? _.map(this.state.itemsStore.items, (obj) => this.renderCategory(obj)) : (<SpinnerComponent />);
    }

    render() {
        return (
            <div className="app--result">
                { this.renderCategories() }
            </div>
        );
    }

}
