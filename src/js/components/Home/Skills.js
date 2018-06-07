import React, { Component } from 'react';

export default class Skills extends Component {
  render() {
    const {isSelected} = this.props;

    return(
      <section id="skills" className={isSelected ? 'selected-section' : ''}>
        <h1>Skills</h1>
        <div className="development-skills">
          <ul>
            <li><div className="sprite react-icon"/>React</li>
            <li><div className="sprite redux-icon"/>Redux</li>
            <li><div className="sprite javascript-icon"/>Javascript</li>
            <li><div className="sprite node-icon"/>Node</li>
            <li><div className="sprite jquery-icon"/>JQuery</li>
            <li><div className="sprite rails-icon"/>Ruby on Rails</li>
            <li><div className="sprite ruby-icon"/>Ruby</li>
            <li><div className="sprite git-icon"/>Git</li>
            <li><div className="sprite api-icon"/>REST API</li>
            <li><div className="sprite react-icon"/>Analytics</li>
            <li><div className="sprite html-css-icon"/>HTML5/CSS</li>
          </ul>
        </div>
      </section>
    )
  }
}