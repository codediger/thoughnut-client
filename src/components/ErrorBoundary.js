import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // logErrorToMyService(error, info);    
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong.</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
