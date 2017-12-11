import React, { Component } from "react";
import { connect } from "react-redux";
import resources from "./resources";
// import renderPoem from "./resources.js";
import "./index.css";
class Output extends Component {
  renderPoem = () => {
    if(Object.keys(this.props.poem).length === 0){
      return "";
    }else{
      return <div>
        {
          this.props.poem.map(el => <p>{el}</p>)
        }
      </div>
    }
  }
  render(){
    console.log("the poem", this.props.poem);
    return (
      <div className="poemWrapper">
         {this.renderPoem()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  if(Object.keys(state).length === 0){
    return {
      poem: []
    }
  }
  else{
    return {
      poem: state.split(".")
    }
  }

}
export default connect(mapStateToProps)(Output);
