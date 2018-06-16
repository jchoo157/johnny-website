import React, { Component } from 'react';
import SocialMedia from './SocialMedia';

export default class Main extends Component {
  render() {
    const {selectedSection, isSelected} = this.props;

    return(
      <section id="main" className={isSelected ? 'selected-section' : ''}>
        <div className="top-main">
          <SocialMedia />
          <img src={require("../../../../public/images/jchoo.png")} className="jchoo"/>
        </div>
        <div className="intro">
          <div className="greeting">
            <span className="peach1">Hello,</span> 
            <br/>
            <span className="peach3">I'm <span>Johnny Choo!</span></span>
          </div>
          <h3 className="job-titles dark-brown">
            Front End Engineer <span>| </span> 
            San Francisco
          </h3>
          
          <a className="main-btn" href={require("../../../../public/johnnychoo2018.pdf")} download="johnny-choo-resume">
            Download Resume
          </a>
        </div>
        <div className="city"/>
        {/*<div className="choo-picture"></div>*/}
      </section>
    )
  }
}