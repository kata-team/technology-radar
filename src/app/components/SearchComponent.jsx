import React, { Component } from 'react';
import _ from 'underscore';
import OffcanvasComponent from '../components/OffcanvasComponent';
import SearchActions from '../actions/SearchActions';
import ItemsStore from '../stores/ItemsStore';

export default class SearchComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: ItemsStore.statusList(),
            offcanvas: false,
        };

        this.onClickOffcanvasHandler = this.onClickOffcanvasHandler.bind(this);
    }

    componentDidMount() {
        ItemsStore.addChangeResultListener(this.onChangeResultHandler.bind(this));
    }

    componentWillUnmount() {
        ItemsStore.removeChangeResultListener(this.onChangeResultHandler.bind(this));
    }

    onChangeResultHandler() {
        this.setState({ status: ItemsStore.statusList() });
    }

    onClickOffcanvasHandler() {
        this.setState((prevState, props) => ({
            offcanvas: !prevState.offcanvas
        }));

        document.body.classList.toggle('uk-offcanvas-page');
        document.body.classList.toggle('uk-offcanvas-page-animation');
        document.body.classList.toggle('uk-offcanvas-page-overlay');
        document.body.classList.toggle('uk-offcanvas-flip');
    }

    status() {
        return _.map(this.state.status, (status, key) => (
            <div key={key}>
                <label><input className="uk-checkbox" type="checkbox" value={status} onChange={(event) => { SearchActions.changeStatus(event.target) }} /> {status}</label>
            </div>
        ));
    }

    render() {
        return (
            <div className="uk-search uk-width-1-4@s">

                <form>
                    <a className="uk-form-icon uk-form-icon-flip" onClick={this.onClickOffcanvasHandler}><i className="fa fa-filter"></i></a>
                    <input type="search" placeholder="Search" className="uk-input" onChange={(event) => { SearchActions.changeCriteria(event.target.value) }} />
                </form>

                <OffcanvasComponent open={this.state.offcanvas} onClick={this.onClickOffcanvasHandler}>
                    <h3>Filter</h3>

                    <div className="uk-margin uk-grid-small uk-child-width-auto">
                        <div className="uk-margin-small"><b>Status</b></div>
                        { this.status() }
                    </div>

                    <button className="uk-button uk-button-default uk-offcanvas-close uk-width-1-1 uk-margin" onClick={this.onClickOffcanvasHandler} type="button">Close</button>
                </OffcanvasComponent>

            </div>
        );
    }

}
