import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";

import {
  Home,
  AdminLogin,
  AdminDashboard,
  FourOhFour
} from "./config/routesHandler";
import client from './apolloClient'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/admin" exact component={AdminLogin} /> />
            <Route path="/admin/:any" component={AdminDashboard} />
            <Route exact component={FourOhFour} />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
