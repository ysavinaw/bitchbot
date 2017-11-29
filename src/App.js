import React, { Component } from 'react';
import Form from './Form/Form.js'
import DropDownMenuList from './DropDownMenu/DropDownMenuList.js'
import SubmitButton from './SubmitButton/SubmitButton.js'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Welcome To The Bitch-Bot </h1>
          <p> Bitch. Vent.  Problem-Solve. </p>

        </header>

        <div className ="leftbox" id="lefttext">

        TEXT TEXT TEXT TEXT
        </div>

      <div className="rightbox">
        <p className="righttext">  Select a complaint from the provided list or enter your own!</p>
          <DropDownMenuList />
          <br />
            <Form />
          <br />
            <SubmitButton />
      </div>
    </div>
    );
  }
}



export default App;
