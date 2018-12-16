import React, { Component } from "react";

class Name extends Component {
  render() {
    return <input type="text" value={this.props.nameValue} />;
  }
}

export default Name;
