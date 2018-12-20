import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppComponent from './app/components/AppComponent';
import packageJson from '../package.json';

document.getElementById('version').innerHTML = `v ${packageJson.version}`;

ReactDOM.render(
    <AppComponent />
    , document.getElementById('root'));
