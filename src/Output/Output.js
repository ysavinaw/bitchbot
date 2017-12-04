import React, { Component } from "react";
import { connect } from "react-redux";
import resources from "./resources";
// import renderPoem from "./resources.js";

class Output extends Component {
  render() {
    console.log(this.props.inputS, this.props.julya);
    return <div>Hello</div>;
  }
}
export default connect(resources)(Output);
