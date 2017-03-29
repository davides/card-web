import React from 'react';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Home from './Home';
import './App.css';

const history = createHistory();

export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route path='/' component={Home} />
      </Router>
    );
  }
}
