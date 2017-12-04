import React, { Component } from "react";
import { connect } from "react-redux";
import resources from "./resources";
// import renderPoem from "./resources.js";

class Output extends Component {
  renderPoem = () => {
    if(Object.keys(this.props.inputS._text).length === 0){
      return "";
    }else{
      return this.props.renderPoem;
    }
  }
  render() {

    return (
      <div>
        {this.renderPoem()}
      </div>
    )
  }
}
export default connect(resources)(Output);
