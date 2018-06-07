var $ = require('jquery');
import React, { Component } from 'react';
import Main from '../components/Home/Main';
import Employment from '../components/Home/Employment';
import Skills from '../components/Home/Skills';
import Portfolio from '../components/Home/Portfolio';
import Navigation from '../components/Home/Navigation';
import Contact from '../components/Home/Contact';

export default class Home extends Component {
  componentDidMount() {
    $(window).scroll(function(){
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      $.each($('section'), function(index, elem) {
        var elemId = elem.id;
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        if ((docViewTop <= elemBottom) && (docViewTop > (elemTop - 50))) {
          console.log(elemId)
          console.log(elem)
          $('section').removeClass('div-shadow')
          $(elem).addClass('div-shadow')
          $('#navigation p').removeClass('highlight')
          $('.' + elemId).addClass('highlight')
        }
      })
    });
  }

  render() {
    return(
      <div id="home">
        <Navigation />
        <Main />
        <Employment />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    )
  }
}