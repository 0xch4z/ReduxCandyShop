import React from 'react';
import { render } from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

import RootReducer from './reducers';
import Home from './components/Home';
import Cart from './containers/Cart';
import Browse from './components/Browse';
import SignIn from './components/SignIn';
import Register from './components/Register';
import About from './components/About';

const root = document.getElementById('root');
const store = createStore(RootReducer, applyMiddleware(logger));

render(
  <Provider store={store}>
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/browse" component={Browse} />
          <Route path="/about" component={About} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/register" component={Register} />
        </Switch>
      </main>
    </Router>
  </Provider>,
  root
);
