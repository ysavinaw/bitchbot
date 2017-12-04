import React, { Component } from "react";
import { connect } from "react-redux";
import resources from "./resources";
// import renderPoem from "./resources.js";

class Output extends Component {
  render() {
    return <div>{/* <renderPoem /> */}</div>;
  }
}
export default connect(resources)(Output);
