import React, { Component } from 'react';
import _ from 'underscore';

export default class OffcanvasComponent extends Component {

    get overlayClassName() {
        return _({
            'uk-offcanvas': true,
            'uk-offcanvas-flip': true,
            'uk-offcanvas-overlay': true,
            'uk-open': Boolean(this.props.open),
        }).reduce(function(trues, value, key) {
            if(value === true) {
                trues.push(key);
            }
            return trues;
        }, []).join(' ');
    }

    get barClassName() {
        return _({
            'uk-offcanvas-bar': true,
            'uk-offcanvas-bar-animation': true,
            'uk-offcanvas-push': true,
            'uk-offcanvas-flip': true,
            'uk-open': Boolean(this.props.open),
        }).reduce(function(trues, value, key) {
            if(value === true) {
                trues.push(key);
            }
            return trues;
        }, []).join(' ');
    }

    onClick(event) {
        this.props.onClick();
    }

    render() {
        return (
            <div>
                <div className={this.overlayClassName} onClick={(event) => { this.onClick(event) }}></div>
                <div className={this.barClassName}>
                    {this.props.children}
                </div>
            </div>
        );
    }

}
