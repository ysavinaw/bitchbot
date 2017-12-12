import React from 'react';
import Header from '../Header/Header.js'
import './about.css';


const About = () => {
        return (
        <div className="aboutpage">
              <Header />

                <div className ="centerbox">

                  <p>The Bitch-Bot is a final project for the Propulsion Academy Full-Stack Web Development Boot Camp in Zurich.
                  </p>
                  <p><center>If you have any bitchy submissions to add to the program, just send an email to
                <a href="mailto:admin@bitch-bot.com?Subject=Poem%20Submission" target="_top"> admin@bitch-bot.com </a>
                </center></p>
                  </div>
            </div>
)}
export default About;
