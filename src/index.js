import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppComponent from './app/components/AppComponent';
import packageJson from '../package.json';
import Cookie from 'js-cookie';

const url = (new URL(window.location.href));
const id = url.searchParams.get('id');

if (id) {
    Cookie.set('document_id', id);
    window.history.replaceState({}, document.title, url.pathname);
}


document.getElementById('version').innerHTML = `v ${packageJson.version}`;

ReactDOM.render(
    <AppComponent />
    , document.getElementById('root'));
