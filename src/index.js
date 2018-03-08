import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";

import './index.css';
import App from './components/App';
import reducers from "./reducers";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
