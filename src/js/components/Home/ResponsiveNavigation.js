import React, { Component } from 'react';
import Navigation from './Navigation';

export default class ResponsiveNavigation extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    }
  }

  toggleNav() {
    this.setState({open: !this.state.open})
  }

  render() {
    const {selectedSection} = this.props;
    return (
      <div className="nav-container">
        <div className="mobile-nav">
          <div className="nav-icon" onClick={() => this.toggleNav()}/>
          {this.state.open ? <Navigation selectedSection={selectedSection} /> : null}
        </div>
        <div className="desktop-nav">
          <Navigation selectedSection={selectedSection} />
        </div>
      </div>
    )
  }
}