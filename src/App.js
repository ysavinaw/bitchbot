import React, { Component } from "react";
import Form from "./Form/Form.js";
import Header from "./Header/Header.js";

import "./App.css";
import Output from "./Output/Output.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className ="Header">
          <Header />
        </div>
        <div className="rightbox">
          <p className="righttext">

           <br />
            Enter a brief complaint and press submit to bitch about it via poem.
          </p>



          <Form />


        </div>

        <div className="renderedPoem">
          <Output />
        </div>
      </div>
    );
  }
}

export default App;
