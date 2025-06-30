import React, { Component } from "react";

class DashboardClass extends Component {
  render() {
    return <div>Welcome to your smart home dashboard, {this.props.user.name}!</div>;
  }
}
export default DashboardClass;
