import React, { Component, Fragment } from 'react';
import './About.css';
// https://www.w3schools.com/icons/fontawesome_icons_intro.asp

class About extends Component {

    render() {
        return (
            <Fragment>
                <section>
                    <div className="container">
                        <div className="row mbr-justify-content-center">
                            <div className="col-lg-6 mbr-col-md-10">
                                <div className="wrap">
                                    <div className="ico-wrap">
                                        <span className="mbr-iconfont fa-volume-up fa" />
                                    </div>
                                    <div className="text-wrap vcenter">
                                        <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5"> <span>Successful</span></h2>
                                        <p className="mbr-fonts-style text1 mbr-text display-6">Every project is an opportunity to learn ,to figure out problems and challenges to invent and reinvent</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mbr-col-md-10">
                                <div className="wrap">
                                    <div className="ico-wrap">
                                        <span className="mbr-iconfont fa-group fa" />
                                    </div>
                                    <div className="text-wrap vcenter">
                                        <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
                                            <span>Who We Are</span>
                                        </h2>
                                        <p className="mbr-fonts-style text1 mbr-text display-6">We are  young mind team that we gather in  lively place "RBK" which is participate to create creative programmers </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mbr-col-md-10">
                                <div className="wrap">
                                    <div className="ico-wrap">
                                        <span className="mbr-iconfont fa-globe fa" />
                                    </div>
                                    <div className="text-wrap vcenter">
                                        <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">Launch
                    <span>A Unique Project</span>
                                        </h2>
                                        <p className="mbr-fonts-style text1 mbr-text display-6">The project that help you to contact with your children's schools from any part of the world </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mbr-col-md-10">
                                <div className="wrap">
                                    <div className="ico-wrap">
                                        <span className="mbr-iconfont fa-trophy fa" />
                                    </div>
                                    <div className="text-wrap vcenter">
                                        <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5"> <span>Our Targets</span></h2>
                                        <p className="mbr-fonts-style text1 mbr-text display-6">To save people's time and make their life much easier </p>
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