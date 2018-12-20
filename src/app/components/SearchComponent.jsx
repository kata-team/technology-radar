import React, { Component } from 'react';
import _ from 'lodash';
import OffcanvasComponent from '../components/OffcanvasComponent';
import SearchActions from '../actions/SearchActions';
import ItemsStore from '../stores/ItemsStore';

export default class SearchComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsStore: ItemsStore.getState(),
            offcanvas: false,
        };

        this.onClickOffcanvasHandler = this.onClickOffcanvasHandler.bind(this);
    }

    componentDidMount() {
        this.listener = ItemsStore.addListener(this.onChangeResultHandler.bind(this));
    }

    componentWillUnmount() {
        this.listener.remove();
    }

    onChangeResultHandler() {
        this.setState({
            itemsStore: ItemsStore.getState(),
        });
    }

    onSubmitSearchHandler(e) {
        e.preventDefault();
    }
    
    onClickOffcanvasHandler() {
        this.setState((prevState) => ({
            offcanvas: !prevState.offcanvas,
        }));

        document.body.classList.toggle('uk-offcanvas-page');
        document.body.classList.toggle('uk-offcanvas-page-animation');
        document.body.classList.toggle('uk-offcanvas-page-overlay');
        document.body.classList.toggle('uk-offcanvas-flip');
    }

    categories() {
        return _.map(this.state.itemsStore.categories, (category, key) => (
            <div key={key}>
                <label htmlFor={category}><input id={category} className="uk-checkbox" type="checkbox" value={category} onChange={(event) => { SearchActions.changeCategory(event.target) }} /> {category}</label>
            </div>
        ));
    }

    statuses() {
        return _.map(this.state.itemsStore.statuses, (status, key) => (
            <div key={key}>
                <label htmlFor={status}><input id={status} className="uk-checkbox" type="checkbox" value={status} onChange={(event) => { SearchActions.changeStatus(event.target) }} /> {status}</label>
            </div>
        ));
    }

    tags() {
        return _.map(this.state.itemsStore.tags, (tag, key) => (
            <div key={key}>
                <label htmlFor={tag}><input id={tag} className="uk-checkbox" type="checkbox" value={tag} onChange={(event) => { SearchActions.changeTag(event.target) }} /> {tag}</label>
            </div>
        ));
    }

    render() {
        return (
            <div>

                <form onSubmit={this.onSubmitSearchHandler}>
                    <button className="uk-form-icon uk-form-icon-flip" onClick={this.onClickOffcanvasHandler}><i className="fa fa-filter" /></button>
                    <input type="search" placeholder="Search" className="uk-input" onChange={(event) => { SearchActions.changeQuery(event.target.value) }} />
                </form>

                <OffcanvasComponent open={this.state.offcanvas} onClick={this.onClickOffcanvasHandler}>
                    <h3>Filter</h3>

                    <div className="uk-margin uk-grid-small uk-child-width-auto">
                        <div className="uk-margin-small"><b>Category</b></div>
                        { this.categories() }
                    </div>

                    <div className="uk-margin uk-grid-small uk-child-width-auto">
                        <div className="uk-margin-small"><b>Status</b></div>
                        { this.statuses() }
                    </div>

                    <div className="uk-margin uk-grid-small uk-child-width-auto">
                        <div className="uk-margin-small"><b>Tags</b></div>
                        { this.tags() }
                    </div>

                    <button className="uk-button uk-button-default uk-width-1-1 uk-margin" onClick={this.onClickOffcanvasHandler} type="button">Close</button>
                </OffcanvasComponent>

            </div>
        );
    }

}
