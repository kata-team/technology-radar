import React, { Component } from 'react';
import ViewActions from '../actions/ViewActions'

export default class ViewComponent extends Component {

    onClickViewGrid() {
        ViewActions.selectGrid();
    }

    onClickViewLine() {
        ViewActions.selectLine();
    }

    render() {
        return (
            <div className="uk-grid">
                <a className="uk-width-1-2" onClick={this.onClickViewGrid}><i className="fa fa-th-large fa-2x" /></a>
                <a className="uk-width-1-2" onClick={this.onClickViewLine}><i className="fa fa-bars fa-2x" /></a>
            </div>
        );
    }

}
