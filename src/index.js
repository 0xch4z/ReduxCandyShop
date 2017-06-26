import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import RootReducer from './reducers';

import About from './components/About';
import Browse from './components/Browse';
import Cart from './containers/Cart';
import Home from './components/Home';
import ItemDetail from './components/ItemDetail';
import Register from './components/Register';
import SignIn from './components/SignIn';

const root = document.getElementById('root');
const store = createStore(RootReducer, applyMiddleware(logger));

render(
  <Provider store={store}>
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/browse" component={Browse} />
          <Route path="/cart" component={Cart} />
          <Route path="/item=:name" component={ItemDetail} />
          <Route path="/register" component={Register} />
          <Route path="/sign-in" component={SignIn} />
        </Switch>
      </main>
    </Router>
  </Provider>,
  root
);
