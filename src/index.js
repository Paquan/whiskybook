import "@babel/polyfill";
import "regenerator-runtime/runtime"
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

import './assets/scss/index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
