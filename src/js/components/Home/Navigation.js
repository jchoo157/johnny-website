import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    const {selectedSection} = this.props;

    return (
      <div id="navigation">
        {/*<div className="job-icon"/>
        <div className="skills-icon"/>
        <div className="project-icon"/>*/}
        <p className="main">Main</p>
        <p className="employment">Jobs</p>
        <p className="skills">Skills</p>
        <p className="portfolio">Projects</p>
      </div>
    )
  }
}