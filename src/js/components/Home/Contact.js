import React, { Component } from 'react';
import SocialMedia from './SocialMedia';

export default class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="contact-content">
          <h1> Best ways to reach me! </h1>
          <p>Please feel free to message me through Linkedin or my email address with any questions you may have. I'm always happy to hear about new opportunities and what you have to offer!</p>
          <div className="container">
            <div className="contact-linkedin">
              <a href="https://www.linkedin.com/in/jchoo157" target="_blank"><img src="../../../../public/images/icons/linkedin-big-icon.png"/></a>
              <a href="https://www.linkedin.com/in/jchoo157" target="_blank" className="no-underline">jchoo157</a>
            </div>
            <div className="contact-email">
              <a href="mailto:jchoo156@gmail.com"><img src="../../../../public/images/icons/email-icon.png"/></a>
              <a href="mailto:jchoo156@gmail.com" className="no-underline">jchoo156@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="footer-content">
          <SocialMedia />
          <p className="cr">© {(new Date()).getFullYear()} Johnny Choo. All rights reserved.</p>
        </div>
      </section>
    )
  }
}