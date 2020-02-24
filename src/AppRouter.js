import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Dashboard from './containers/Dashboard';

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}
