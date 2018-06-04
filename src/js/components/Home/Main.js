import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return(
      <div id="main">
        <div className="intro">
          <h1>
            <span className="light-green">Hello,</span> 
            <br/>
            <span className="white">i'm</span> <span className="light-yellow">Johnny Choo!</span>
          </h1>
          <h3 className="light-grey">I have a passion for web development and always eager to learn new technologies</h3>
        </div>
        {/*<div className="choo-picture"></div>*/}
      </div>
    )
  }
}