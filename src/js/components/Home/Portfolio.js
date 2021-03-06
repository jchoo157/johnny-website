import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    const {isSelected} = this.props;

    return(
      <section id="portfolio" className={isSelected ? 'selected-section selected-content-darken' : ''}>
        <h1>Projects</h1>
        <div className="projects">
          <div className="content">
            <div className="grid">
              <figure className="effect-lily grow">
                <img className='league-slide' src={require("../../../../public/images/portfolio/simple-task-desktop.png")}/>
                <figcaption>
                  <div className="bg">
                    <h2>Simple <span>Task</span></h2>
                    <br/>
                    <p>Easily keep track of your tasks</p>
                  </div>
                <a href="https://simple-task-todo.herokuapp.com" target="_blank"></a>
                </figcaption>     
              </figure>
            </div>
            <div className="grid">
              <figure className="effect-lily grow">
                <img className='guide-slide' src={require("../../../../public/images/portfolio/guideme.png")}/>
                <figcaption>
                  <div className="bg">
                    <h2>Guide <span>Me</span></h2>
                    <br/>
                    <p>Find a guide in the next city you visit</p>
                  </div>
                  <a href="https://guideme-2016.herokuapp.com" target="_blank">View more</a>
                </figcaption>     
              </figure>
            </div>

            <div className="grid">
              <figure className="effect-lily grow">
                <img className='art-slide' src={require("../../../../public/images/portfolio/art-gallery.png")}/>
                <figcaption>
                  <div>
                    <h2>Art <span>Gallery</span></h2>
                    <br/>
                    <p>View artwork I've done in the past</p>
                  </div>
                  <a href="https://choo-art-gallery.herokuapp.com" target="_blank">View more</a>
                </figcaption>     
              </figure>
            </div>

            <div className="grid">
              
              <figure className="effect-lily grow">
                <img className='veggie-slide' src={require("../../../../public/images/portfolio/veggiemon.png")}/>
                <figcaption>
                  <div>
                    <h2>Veggiemon <span>Grow</span></h2>
                    <br/>
                    <p>Capture and battle Veggiemon</p>
                  </div>
                  <a href="https://veggiemongrow2016.herokuapp.com" target="_blank">View more</a>
                </figcaption>     
              </figure>
            </div>
          </div>
        </div>
      </section>
    )
  }
}