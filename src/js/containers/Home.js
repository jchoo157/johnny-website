import React, { Component } from 'react';
import Main from '../components/Home/Main';
import Employment from '../components/Home/Employment';
import Skills from '../components/Home/Skills';
import Portfolio from '../components/Home/Portfolio';
import Navigation from '../components/Home/Navigation';
import Contact from '../components/Home/Contact';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      selectedSection: 'none'
    }
  }

  componentDidMount() {
    const {selectedSection} = this.state;
    const that = this;
    $(window).scroll(function(){
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      $.each($('section'), function(index, elem) {
        var elemId = elem.id;
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        if ((docViewTop <= elemBottom) && (docViewTop > (elemTop - 50))) {
          if (selectedSection != elemId) {
            that.setState({selectedSection: elemId})
          }
        }
      })
    });

    $('.company-tasks').slideDown('slow', function() {})
  }

  render() {
    const {selectedSection} = this.state;

    return(
      <div id="home">
        <Navigation selectedSection={selectedSection}/>
        <Main isSelected={selectedSection == 'main'}/>
        <Employment isSelected={selectedSection == 'employment'}/>
        <Skills isSelected={selectedSection == 'skills'}/>
        <Portfolio isSelected={selectedSection == 'portfolio'}/>
        <Contact isSelected={selectedSection == 'contact'}/>
      </div>
    )
  }
}