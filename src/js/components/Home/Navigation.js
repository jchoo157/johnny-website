import React, { Component } from 'react';

export default class Navigation extends Component {
  constructor() {
    super()
  }

  smoothScrollToSection(event) {
    let getClassName = event.target.className;
    $('html, body').animate({
        scrollTop:$('#' + getClassName).offset().top
    }, 'slow');
  }

  render() {
    const {selectedSection} = this.props;

    return (
      <div id="navigation">
        <p className={"main" + " " + (selectedSection == 'main' ? 'highlight' : '')} onClick={(e) => this.smoothScrollToSection(e)}>Main</p>
        <p className={"employment" + " " + (selectedSection == 'employment' ? 'highlight' : '')} onClick={(e) => this.smoothScrollToSection(e)}>Jobs</p>
        <p className={"skills" + " " + (selectedSection == 'skills' ? 'highlight' : '')} onClick={(e) => this.smoothScrollToSection(e)}>Skills</p>
        <p className={"portfolio" + " " + (selectedSection == 'portfolio' ? 'highlight' : '')} onClick={(e) => this.smoothScrollToSection(e)}>Projects</p>
      </div>
    )
  }
}