import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Homepage from './components/Homepage';
import StepOne from './components/StepOne';

import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Homepage}/>
      <Route exact path='/homepage' component={Homepage}/>
    </App>
  </BrowserRouter>,
  document.getElementById('root'));

serviceWorker.unregister();
