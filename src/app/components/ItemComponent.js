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
            <a className="uk-panel uk-panel-box uk-panel-box-default" target="_blank" rel="noopener noreferrer" href={this.props.item.url}>
                <div className="uk-panel-badge uk-badge">{this.props.item.status}</div>
                <h3 className="uk-panel-title">{this.props.item.name}</h3>
                <p>{this.props.item.description}</p>
            </a>
        );
    }

}
