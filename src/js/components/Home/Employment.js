import React, {Component} from 'react';

export default class Employment extends Component {
  constructor() {
    super();

    this.state = {
      infosOpen: {
        'Prynt': false,
        'Prynt (Intern)': false
      }
    }

    this.learnMoreClick = this.learnMoreClick.bind(this)
    this.jobInfo = this.jobInfo.bind(this)
  }

  learnMoreClick(company) {
    let infosOpen = Object.assign({}, this.state.infosOpen);

    if (this.state.infosOpen[company]) {
      console.log(company, 'set false')
      infosOpen[company] = false;
      this.setState({infosOpen})
    } else {
      console.log(company, 'set true')
      infosOpen[company] = true;
      this.setState({infosOpen})
    }

    console.log(this.state)
  }

  jobInfo(company) {
    if (company == 'Prynt') {
      return (
        <ul>
          <li>Revamped UI/UX of e-commerce site with 20,000+ monthly visitors using designs created from graphic designers</li>
          <li>Worked directly with product managers & marketing team to improve e-commerce sales on website</li>
          <li>Used various tools including google analytics, hotjar, and mixpanel to gather data on user interaction around website • Helped improve page load time by reducing API calls used around React on Rails application</li>
          <li>Developed tools to help marketing team add content around website</li>
          <li>Communicated with developers weekly on development tasks and strategies</li>
          <li>Performed peer code reviews</li>
        </ul>
      )
    } else if (company == 'Prynt (Intern)') {
      return (
        <ul>
          <li>Revamped UI/UX of e-commerce site with 20,000+ monthly visitors using designs created from graphic designers</li>
          <li>Worked directly with product managers & marketing team to improve e-commerce sales on website</li>
          <li>Used various tools including google analytics, hotjar, and mixpanel to gather data on user interaction around website • Helped improve page load time by reducing API calls used around React on Rails application</li>
          <li>Developed tools to help marketing team add content around website</li>
          <li>Communicated with developers weekly on development tasks and strategies</li>
          <li>Performed peer code reviews</li>
        </ul>
      )
    }
  }

  slideDownInfo() {

  }

  render() {
    const {infosOpen} = this.state;
    const {isSelected} = this.props;

    return (
      <section id="employment" className={isSelected ? 'selected-section selected-content-darken' : ''}>
        <h1>Experience</h1>
        <ul>
          <li className="company-row">
            <div className="company-date">
              <span>2018 - 2019</span>
              <span className="dot">&nbsp;</span>
              {!infosOpen['Prynt'] ? <div className="vertical-line"></div> : null}
            </div>
            <div className="job-title">
              <div className="company"><img src={require("../../../../public/images/prynt_logo.jpg")}/><span className="company-name">Prynt</span></div>
              <span className="text">Software Developer</span>
              <div className="info-btn" onClick={() => {this.learnMoreClick('Prynt', 'Software Developer')}}>+</div>
            </div>
          </li>
          {infosOpen['Prynt'] ? <div className="company-tasks">{this.jobInfo('Prynt')}</div> : null}

          <li className="company-row">
            <div className="company-date">
              <span>2017 - 2018</span>
              <span className="dot">&nbsp;</span>
            </div>
            <div className="job-title">
              <div className="company"><img src={require("../../../../public/images/prynt_logo.jpg")}/><span className="company-name">Prynt (Intern)</span></div>
              <span className="text">Software Developer Intern</span>
              <div className="info-btn" onClick={() => {this.learnMoreClick('Prynt (Intern)', 'Software Developer Intern')}}>+</div>
            </div>
          </li>
          {infosOpen['Prynt (Intern)'] ? <div className="company-tasks">{this.jobInfo('Prynt')}</div> : null}
        </ul>
      </section>
    )
  }
}