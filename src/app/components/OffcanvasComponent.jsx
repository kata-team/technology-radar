import React, { Component } from 'react';
import _ from 'lodash';

export default class OffcanvasComponent extends Component {

    static get propTypes() {
        return {
            onClick: React.PropTypes.func,
            open: React.PropTypes.bool,
            children: React.PropTypes.node,
        };
    }

    toClassName(obj) {
        return _(obj).reduce((trues, value, key) => {
            if (value === true) {
                trues.push(key);
            }
            return trues;
        }, []).join(' ');
    }

    get overlayClassName() {
        return this.toClassName({
            'uk-offcanvas': true,
            'uk-offcanvas-flip': true,
            'uk-offcanvas-overlay': true,
            'uk-open': Boolean(this.props.open),
        });
    }

    get barClassName() {
        return this.toClassName({
            'uk-offcanvas-bar': true,
            'uk-offcanvas-bar-animation': true,
            'uk-offcanvas-push': true,
            'uk-offcanvas-flip': true,
            'uk-open': Boolean(this.props.open),
        });
    }

    render() {
        return (
            <div>
                <div className={this.overlayClassName} onClick={this.props.onClick} />
                <div className={this.barClassName}>
                    {this.props.children}
                </div>
            </div>
        );
    }

}
