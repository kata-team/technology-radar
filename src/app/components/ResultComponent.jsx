import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import ItemComponent from './ItemComponent';
import SpinnerComponent from './SpinnerComponent';
import AppConstants from '../constants/AppConstants';

export default class ResultComponent extends Component {

    static get propTypes() {
        return {
            itemsStore: PropTypes.object.isRequired,
            appStore: PropTypes.object.isRequired,
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
            'uk-child-width-1-2@m uk-child-width-1-3@l': this.props.appStore.view === AppConstants.VIEW_GRID,
            'uk-child-width-1-1': this.props.appStore.view === AppConstants.VIEW_LIST,
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

    renderNoResults() {
        return (
            <div className="no-results">
                <i className="fa fa-meh-o" aria-hidden="true"></i><br />
                There are no results!<br />
                <small>remember to set the environment variable: <b>REACT_APP_SPREADSHEET_ID</b></small>
            </div>
        );
    }

    renderCategories() {
        if (this.props.itemsStore.isSearching) {
            return (<SpinnerComponent />);
        }

        if (this.props.itemsStore.items.length === 0) {
            return this.renderNoResults();
        }

        return _.map(this.props.itemsStore.items, (obj) => this.renderCategory(obj));
    }

    render() {
        return (
            <div className={`app--result ${this.props.appStore.view}`}>
                { this.renderCategories() }
            </div>
        );
    }

}
