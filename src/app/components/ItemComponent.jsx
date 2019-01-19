import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Item from '../class/Item';
import Color from 'color';

export default class ItemComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
        };

        this.onClickModal = this.onClickModal.bind(this);
    }

    static get propTypes() {
        return {
            item: PropTypes.instanceOf(Item),
        };
    }

    onClickModal(e) {
        if (!e.currentTarget.classList.contains('uk-modal') || e.target === e.currentTarget) {
            this.setState((prevState) => ({
                modalOpen: !prevState.modalOpen,
            }));
    
            document.body.classList.toggle('uk-modal-page');
        }
    }

    get labelStyle() {
        return {
            background: Color(this.props.item.category.color).darken(0.15)
        };
    }

    renderLabel(text) {
        return <div className="uk-label" style={this.labelStyle}>{text}</div>
    }

    renderTags(showContainer) {
        const tags = _.map(this.props.item.tags, (tag, key) => (
            <span key={key}>{this.renderLabel(tag)}&nbsp;</span>
        ));

        return _.isEmpty(tags) === false && showContainer ? (
            <div className="uk-modal-footer">{tags}</div>
        ) : tags;
    }

    renderComments() {
        const comments = _.map(this.props.item.comments, (comment, key) => {
            return (
                <li key={key}>
                    <article className="uk-comment">
                        <div className="uk-comment-body">
                            <div><small>{comment.date}</small></div>
                            <div className="uk-text-bold uk-text-primary">{comment.author}</div>
                            {this.renderLabel(comment.status)}
                            <div className="uk-margin-small-top">{comment.message}</div>
                        </div>
                    </article>
                </li>
            )
        });

        return _.isEmpty(comments) === false ? (
            <div className="uk-modal-footer uk-padding-small">
                <ul className="uk-comment-list">{comments}</ul>
            </div>
        ) : comments;
    }

    renderCard() {
        return (
            <div className="uk-card uk-card-default uk-card-hover" onClick={this.onClickModal}>
                <div className="uk-card-body">
                    {this.props.item.status ? (<div className="uk-card-badge uk-label" style={this.labelStyle}>{this.props.item.status}</div>) : ''}
                    <h3 className="uk-card-title">{this.props.item.name}</h3>
                    <p className="uk-card-description">{this.props.item.description}</p>
                </div>
                <div className="uk-card-footer">
                    {this.renderTags(false)}
                </div>
            </div>
        );
    }

    renderModal() {
        return (
            <div className={`uk-modal ${this.state.modalOpen ? 'uk-open' : ''}`} onClick={this.onClickModal}>
                <div className="uk-modal-dialog">
                    <button className="uk-close uk-modal-close-default" onClick={this.onClickModal}>
                        <i className="fa fa-close" aria-hidden="true"></i>
                    </button>
                    <div className="uk-modal-header">
                        <h3 className="uk-modal-title">{this.props.item.name}</h3>
                    </div>
                    <div className="uk-modal-body">
                        {this.props.item.status ? (<div className="uk-modal-badge uk-label" style={this.labelStyle}>{this.props.item.status}</div>) : ''}
                        <p className="uk-modal-description">{this.props.item.description}</p>
                        <a target="_blank" rel="noopener noreferrer" {...this.props.item.url ? { href: this.props.item.url } : {}}><i className="fa fa-globe"></i>website</a>
                    </div>
                    {this.renderTags(true)}
                    {this.renderComments()}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                { this.renderCard() }
                { this.renderModal() }
            </div>
        );
    }

}
