import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Homepage from './components/Homepage';
import About from './components/About';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Homepage}/>
      <Route exact path='/homepage' component={Homepage}/>
      <Route exact path="/about" component={About}/>
    </App>
  </BrowserRouter>,
  document.getElementById('root'));

serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';

// import App from './App';


// import * as serviceWorker from './serviceWorker';



// ReactDOM.render(<App/>, document.getElementById('root'));

// serviceWorker.unregister();

