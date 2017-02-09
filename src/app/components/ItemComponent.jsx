import React, { Component } from 'react';
import Item from '../class/Item';

export default class ItemComponent extends Component {

    static get propTypes() {
        return {
            item: React.PropTypes.instanceOf(Item),
        };
    }

    render() {
        return (
            <div>
                <a className="uk-card uk-card-default uk-card-body uk-card-hover" target="_blank" rel="noopener noreferrer" { ...this.props.item.url ? {href: this.props.item.url} : {} }>
                    <div className="uk-card-badge uk-label">{this.props.item.status}</div>
                    <h3 className="uk-card-title">{this.props.item.name}</h3>
                    <p>{this.props.item.description}</p>
                </a>
            </div>
        );
    }

}
