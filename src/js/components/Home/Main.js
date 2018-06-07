var $ = require('jquery');
import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    const {selectedSection, isSelected} = this.props;

    return(
      <section id="main" className={isSelected ? 'selected-section' : ''}>
        <div className="top-main">
          <img src="../../../../public/images/jchoo.png" className="jchoo"/>
        </div>
        <div className="intro">
          <div className="greeting">
            <span className="peach1">Hello,</span> 
            <br/>
            <span className="peach3">I'm <span>Johnny Choo!</span></span>
          </div>
          <h3 className="job-titles dark-brown">
            Front End Engineer <span>| </span> 
            Web Developer
          </h3>
          <div className="hire-me-btn">Hire Me!</div>
        </div>
        <div className="city"/>
        {/*<div className="choo-picture"></div>*/}
      </section>
    )
  }
}