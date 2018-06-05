import React, { Component } from 'react';

export default class Skills extends Component {
  render() {
    return(
      <div id="skills" className="div-shadow">
        <h1>Skills</h1>
        <div className="development-skills">
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Javascript/ES6/ES7</li>
            <li>JQuery</li>
            <li>Ruby on Rails</li>
            <li>Ruby</li>
            <li>HTML5/CSS</li>
            <li>Node</li>
            <li>Git</li>
            <li>REST API</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="additional-skills">
          <h2>Additional Skills</h2>
        </div>
      </div>
    )
  }
}