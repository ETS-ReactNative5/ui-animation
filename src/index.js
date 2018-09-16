import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';

import './index.css';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import indexRoute from './routes/index.js';
dotenv.config()
const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      {
        indexRoute.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key}></Route>
        })
      }
    </Switch>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
