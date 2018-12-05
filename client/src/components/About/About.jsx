import React, { Component, Fragment } from 'react';
import './About.css';
// https://www.w3schools.com/icons/fontawesome_icons_intro.asp

class About extends Component {

    render() {
        return (
            <Fragment>
                  <section className="mysection">
        <div className="container  ">
          <div className="row mbr-justify-content-center">
            <div className="col-lg-6 mbr-col-md-10 tall">
              <div className="wrap">
                <div className="ico-wrap">
                  <span className="mbr-iconfont fa-volume-up fa" />
                </div>
                <div className="text-wrap center">
                  <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5  myh3"> <span>Successful</span></h2>
                  <p className="mbr-fonts-style text1 mbr-text display-6 mypa">Every project is an opportunity to learn ,to figure out problems and challenges to invent and reinvent</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mbr-col-md-10 tall">
              <div className="wrap">
                <div className="ico-wrap">
                  <span className="mbr-iconfont fa-group fa" />
                </div>
                <div className="text-wrap center tall">
                  <h3 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
                    <span>Who We Are</span>
                  </h3>
                  <p className="mbr-fonts-style text1 mbr-text display-6">We are  young mind team that we gather at "RBK" which is participate to create creative programmers </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mbr-col-md-10 tall">
              <div className="wrap">
                <div className="ico-wrap">
                  <span className="mbr-iconfont fa-globe fa" />
                </div>
                <div className="text-wrap center">
                  <h3 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
                    <span>A Unique Project</span>
                  </h3>
                  <p className="mbr-fonts-style text1 mbr-text display-6">The project that help you to contact with your children's schools from any part of the world </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mbr-col-md-10 tall">
              <div className="wrap">
                <div className="ico-wrap">
                  <span className="mbr-iconfont fa-trophy fa" />
                </div>
                <div className="text-wrap center">
                  <h3 className="mbr-fonts-style mbr-bold mbr-section-title3 display-2000"> <span>Our Targets</span></h3>
                  <p className="mbr-fonts-style text1 mbr-text display-6">To save people's time and make their life much easier and  make them feel reassured about their children</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
                    
            </Fragment>
        );
    }

}
export default About;