import React, { Component } from 'react';
import Main from '../components/Home/Main';
import Employment from '../components/Home/Employment';
import Skills from '../components/Home/Skills';
import Portfolio from '../components/Home/Portfolio';

export default class Home extends Component {
  render() {
    return(
      <div id="home">
        <Main />
        <Employment />
        <Skills />
        <Portfolio />
      </div>
    )
  }
}