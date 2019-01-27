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

    renderFilter(label, items, onChange) {
        return (
            <div className="uk-margin uk-grid-small uk-child-width-auto">
                <div className="uk-margin-small"><b>{label}</b></div>
                {
                    _.map(items, (itemName) => {
                        const id = `${label.toLowerCase()}-${itemName}`.replace(/[^0-9a-zA-Z]+/g, '-');
                        return (
                            <div key={id}>
                                <label htmlFor={id}><input id={id} className="uk-checkbox" type="checkbox" value={itemName} onChange={(event) => { onChange(event.target) }} /> {itemName}</label>
                            </div>
                        );
                    })
                }
            </div>
        );
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

                    {this.renderFilter('Category', this.state.itemsStore.categories, SearchActions.changeCategory)}
                    {this.renderFilter('Status', this.state.itemsStore.statuses, SearchActions.changeStatus)}
                    {this.renderFilter('Tags', this.state.itemsStore.tags, SearchActions.changeTag)}

                    <button className="uk-button uk-button-default uk-width-1-1 uk-margin" onClick={this.onClickOffcanvasHandler} type="button">Close</button>
                </OffcanvasComponent>

            </div>
        );
    }

}
