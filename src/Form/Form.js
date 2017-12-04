import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import { getData } from "../store/actions";
const style = {
  margin: 12
};
class Form extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }
  handleSubmit = e => {
    this.setState({ input: e.currentTarget.value });
  };

  getInput = () => {
    this.props.dispatch(getData(this.state.input));
  };
  render() {
    return (
      <form className="inputform">
        <input type="text" name="topic" onChange={this.handleSubmit} />
        <RaisedButton
          label="Submit"
          secondary={true}
          style={style}
          onClick={this.getInput}
        />
      </form>
    );
  }
}
export default connect()(Form);
