import React, { Component } from "react";
import Form from "./Form/Form.js";
import DropDownMenuList from "./DropDownMenu/DropDownMenuList.js";
import "./App.css";
import Output from "./Output/Output.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Bitch-Bot </h1>
          <p> Bitch. Vent. Problem-Solve. </p>
        </header>
      {  // <div className="leftbox" id="lefttext">
        //   TEXT TEXT TEXT TEXT
        // </div>
      }
        <div className="rightbox">
          <p className="righttext">
            {" "} <br /> <br />
            Enter a brief complaint and press Submit to bitch about it.
          </p>
          {//<DropDownMenuList />
          }

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
