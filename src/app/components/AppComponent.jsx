import React, { Component } from 'react';
import Cookies from 'js-cookie';
import NavbarComponent from './NavbarComponent';
import ResultContainer from './ResultContainer';
import SearchActions from '../actions/SearchActions';

export default class AppComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            document_id: Cookies.get('document_id')
        }

        this.onLogoutHandler = this.onLogoutHandler.bind(this);
    }

    componentDidMount() {
        SearchActions.load();
    }

    onLogoutHandler() {
        Cookies.remove('document_id');
        SearchActions.load();

        this.setState({
            document_id: undefined
        })
    }

    render() {
        return (
            <div className="app">
                <NavbarComponent />
                <ResultContainer />
                {this.state.document_id ? (
                    <div className="uk-container uk-margin-top uk-text-right"><button className="uk-button uk-button-link" onClick={this.onLogoutHandler}>logout</button></div>
                ) : ''}
            </div>
        );
    }

}
