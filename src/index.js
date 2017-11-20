import React from 'react';
// import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './root_reducer'

// ReactDOM.render(

// 		<App />
// 	, document.getElementById('root')
// );
// registerServiceWorker();

render(
	<Provider store = {createStore(rootReducer)}>
		<App />
	</Provider>, document.getElementById('root')

);

