import React, { Component } from "react";

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testState: this.props.nameValue
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      testState: event.target.value
    });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.testState}
        onChange={this.handleChange}
      />
    );
  }
}

export default Name;
