import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ViewActions from '../actions/ViewActions';
import ViewConstants from '../constants/ViewConstants';

export default class ViewComponent extends Component {

    componentDidMount() {
        if (window.innerWidth < 960) {
            ViewActions.selectList();
        }
    }

    static get propTypes() {
        return {
            viewStore: PropTypes.object.isRequired,
        };
    }

    onClickViewGrid() {
        ViewActions.selectGrid();
    }

    onClickViewList() {
        ViewActions.selectList();
    }

    render() {
        return (
            <div className="view-component">
                <a className={this.props.viewStore.view === ViewConstants.VIEW_GRID ? 'active' : ''} onClick={this.onClickViewGrid}><i className="fa fa-th-large" /></a>
                <a className={this.props.viewStore.view === ViewConstants.VIEW_LIST ? 'active' : ''} onClick={this.onClickViewList}><i className="fa fa-bars" /></a>
            </div>
        );
    }

}
