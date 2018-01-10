import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import configureStore from './store-configuration';
import './index.css';

const initialState = {photos: []};

const store = configureStore(initialState);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
