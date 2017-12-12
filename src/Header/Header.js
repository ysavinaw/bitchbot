import React, { Component } from "react";
import './header.css'
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
        <div className="headerdiv">

          <div className="header"> Bitch-Bot
          </div>
          <div className="menu">
            <Link className="about" to="/about">About the Bitch-Bot </Link>
            <Link className="home" to="/"> Home </Link>

          </div>

        </div>
    )
  }


}


export default Header;
