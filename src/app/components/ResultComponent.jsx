import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import ItemComponent from './ItemComponent';
import SpinnerComponent from './SpinnerComponent';
import ViewConstants from '../constants/ViewConstants';

export default class ResultComponent extends Component {

    static get propTypes() {
        return {
            itemsStore: PropTypes.object.isRequired,
            viewStore: PropTypes.object.isRequired,
        };
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
        const itemsContainer = classnames({
            'uk-child-width-1-2@m uk-child-width-1-3@l': this.props.viewStore.view === ViewConstants.VIEW_GRID,
            'uk-child-width-1-1': this.props.viewStore.view === ViewConstants.VIEW_LIST,
            'uk-grid uk-grid-match': true,
        });

        return (
            <section key={obj.category.name} className="uk-section" style={categoryStyle}>
                <div className="uk-container">

                    <div className="uk-panel uk-light uk-margin-medium">
                        <h3>{obj.category.name}</h3>
                    </div>

                    <div className={itemsContainer}>
                        { this.renderItems(obj.items) }
                    </div>

                </div>
            </section>
        );
    }

    renderCategories() {
        return this.props.itemsStore.items.length > 0 ? _.map(this.props.itemsStore.items, (obj) => this.renderCategory(obj)) : (<SpinnerComponent />);
    }

    render() {
        return (
            <div className={`app--result ${this.props.viewStore.view}`}>
                { this.renderCategories() }
            </div>
        );
    }

}
