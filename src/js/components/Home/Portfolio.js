import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return(
      <div id="portfolio" className="div-shadow">
        <h1>Projects</h1>
        <div className="projects">
          <div className="content">
            <div className="grid">
              <figure className="effect-lily grow">
                <img className='league-slide' src="../../../../public/images/portfolio/leaguestats.png"/>
                <figcaption>
                  <div className="bg">
                    <h2>League <span>Stats</span></h2>
                    <br/>
                    <p>Look up recent gaming history of players</p>
                  </div>
                <a href="https://leaguestats2016.herokuapp.com" target="_blank"></a>
                </figcaption>     
              </figure>
            </div>
            <div className="grid">
              <figure className="effect-lily grow">
                <img className='guide-slide' src="../../../../public/images/portfolio/guideme.png"/>
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
                <img className='art-slide' src="../../../../public/images/portfolio/art-gallery.png"/>
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
                <img className='veggie-slide' src="../../../../public/images/portfolio/veggiemon.png"/>
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
      </div>
    )
  }
}