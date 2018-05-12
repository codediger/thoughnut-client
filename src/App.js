import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  AdminLogin,
  AdminDashboard,
  FourOhFour
} from "./config/routesHandler";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin" exact component={AdminLogin} /> />
          <Route path="/admin/:any" component={AdminDashboard} />
          <Route exact component={FourOhFour} />
        </Switch>
      </Router>
    );
  }
}

export default App;
