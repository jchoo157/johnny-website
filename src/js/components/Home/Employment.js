import React, {Component} from 'react';

export default class Employment extends Component {
  render() {
    return (
      <div id="employment">
        <h1>Work Experience</h1>
        <ul>
          <li className="job">
            <div className="company-info div-shadow">
              <h2>PRYNT</h2>
              <h5>Software Developer</h5>
              <h5>June 2017 to March 2018</h5>
            </div>
            <div className="company-tasks div-shadow">
              <ul>
                <li>Revamped UI/UX of e-commerce site with 20,000+ monthly visitors using designs created from graphic designers</li>
                <li>Worked directly with product managers & marketing team to improve e-commerce sales on website</li>
                <li>Used various tools including google analytics, hotjar, and mixpanel to gather data on user interaction around website</li>
                <li>Developed tools to help marketing team add content around website</li>
                <li>Helped improve page load time by reducing API calls used around React on Rails application</li>
                <li>Communicated with developers weekly on development tasks and strategies</li>
                <li>Performed peer code reviews</li>
              </ul>
            </div>
          </li>
          <li className="job">
            <div className="company-info div-shadow">
              <h2>PRYNT <span className="intern">(INTERN)</span></h2>
              <h5>Software Developer Intern</h5>
              <h5>Jan 2017 to May 2017</h5>
            </div>
            <div className="company-tasks div-shadow">
              <ul>
                <li>Maintained and updated React components and HTML5/CSS</li>
                <li>Assisted with implementing e-commerce analytics</li>
                <li>Created automation of home page layout to allow marketing team to add new pictures, titles, description, buttons, links • Designed, drew, and animated 404 error page</li>
                <li>Communicated with company on work completed and future tasks</li>
                <li>Worked closely with developers on best practices using React on Rails</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}