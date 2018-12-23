import React, { Component } from "react";
import Name from "../components/Name";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "Duc Phan",
      list: ["abc", "def", "iii"]
    };
  }

  render() {
    let finalList = [];
    finalList = this.state.list.map(item => {
      return <option>{item}</option>;
    });
    return (
      <div>
        <Name nameValue={this.state.nameValue} />
        <select>{finalList}</select>
      </div>
    );
  }
}

export default Home;
