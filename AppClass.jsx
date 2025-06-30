import React, { Component } from "react";
import DashboardClass from "./components/DashboardClass";

class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null };
  }

  handleLogin = (user) => {
    this.setState({ currentUser: user });
  };

  render() {
    return (
      <div>
        <h1>Smart Home System</h1>
        {this.state.currentUser ? (
          <DashboardClass user={this.state.currentUser} />
        ) : (
          <p>Please log in to continue.</p>
        )}
      </div>
    );
  }
}
export default AppClass;
