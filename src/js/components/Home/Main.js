import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return(
      <div id="main" className="div-shadow">
        <div className="top-main">
          <img src="../../../../public/images/jchoo.png" className="jchoo"/>
        </div>
        <div className="intro">
          <div className="greeting">
            <span className="peach1">Hello,</span> 
            <br/>
            <span className="peach3">I'm <span>Johnny Choo!</span></span>
          </div>
          <h3 className="dark-brown">I have a passion for web development and always eager to learn new technologies</h3>
        </div>
        {/*<div className="choo-picture"></div>*/}
      </div>
    )
  }
}