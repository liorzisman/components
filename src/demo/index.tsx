import React = require('react');
import ReactDOM = require('react-dom');

import { App } from '../components/app';

import './index.css';

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<App />, app);