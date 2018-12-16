import React, { Component } from "react";
import { Button } from "reactstrap";
import Name from "../components/Name";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "Duc Phan"
    };
  }

  render() {
    return (
      <div>
        <Name nameValue={this.state.nameValue} />
        <Button color="primary">Show Modal</Button>{" "}
      </div>
    );
  }
}

export default Home;
