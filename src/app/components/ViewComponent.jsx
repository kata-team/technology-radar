import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppActions from '../actions/AppActions';
import AppConstants from '../constants/AppConstants';

export default class ViewComponent extends Component {

    componentDidMount() {
        if (window.innerWidth < 960) {
            AppActions.selectList();
        }
    }

    static get propTypes() {
        return {
            appStore: PropTypes.object.isRequired,
        };
    }

    onClickViewGrid() {
        AppActions.selectGrid();
    }

    onClickViewList() {
        AppActions.selectList();
    }

    render() {
        return (
            <div className="view-component">
                <button className={this.props.appStore.view === AppConstants.VIEW_GRID ? 'active' : ''} onClick={this.onClickViewGrid}><i className="fa fa-th-large" /></button>
                <button className={this.props.appStore.view === AppConstants.VIEW_LIST ? 'active' : ''} onClick={this.onClickViewList}><i className="fa fa-bars" /></button>
            </div>
        );
    }

}
