import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Item from '../class/Item';
import Color from 'color';

export default class ItemComponent extends Component {

    static get propTypes() {
        return {
            item: PropTypes.instanceOf(Item),
        };
    }

    get labelStyle() {
        return {
            background: Color(this.props.item.category.color).darken(0.15)
        };
    }

    tags() {
        return _.map(this.props.item.tags, (tag, key) => (
            <span key={key}><div className="uk-label" style={this.labelStyle}>{tag}</div>&nbsp;</span>
        ));
    }

    render() {
        return (
            <div>
                <a className="uk-card uk-card-default uk-card-hover" target="_blank" rel="noopener noreferrer" {...this.props.item.url ? { href: this.props.item.url } : {}}>
                    <div className="uk-card-body">
                        <div className="uk-card-badge uk-label" style={this.labelStyle}>{this.props.item.status}</div>
                        <h3 className="uk-card-title">{this.props.item.name}</h3>
                        <p className="uk-card-description">{this.props.item.description}</p>
                    </div>
                    <div className="uk-card-footer">
                        { this.tags() }
                    </div>
                </a>
            </div>
        );
    }

}
