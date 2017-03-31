import React, { Component } from 'react';
import _ from 'underscore';
import Item from '../class/Item';

export default class ItemComponent extends Component {

    static get propTypes() {
        return {
            item: React.PropTypes.instanceOf(Item),
        };
    }

    tags() {
        return _.map(this.props.item.tags, (tag, key) => (
            <span key={key}><div className="uk-label">{tag}</div>&nbsp;</span>
        ));
    }

    render() {
        return (
            <div>
                <a className="uk-card uk-card-default uk-card-hover" target="_blank" rel="noopener noreferrer" {...this.props.item.url ? { href: this.props.item.url } : {}}>
                    <div className="uk-card-body">
                        <div className="uk-card-badge uk-label">{this.props.item.status}</div>
                        <h3 className="uk-card-title">{this.props.item.name}</h3>
                        <p>{this.props.item.description}</p>
                    </div>
                    <div className="uk-card-footer">
                        { this.tags() }
                    </div>
                </a>
            </div>
        );
    }

}
