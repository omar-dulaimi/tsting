import React, { Component, Fragment } from 'react';
import '../../index.css';

class About extends Component {

    render() {
        return (
            <Fragment>
                <div className="jumbotron container">
                    <h1 className="display-4">About us</h1>
                    <p className="lead">We are a team of developers working on projects required in the curriculum of Hackreactor</p>

                    <div className="list-group developersList">
                        <div className="list-group-item d-flex justify-content-between align-items-center bg-secondary developerItem">
                            <a href="https://github.com/alsheikh813" className="list-group-item list-group-item-action">Scrum master: Ashraf Alsheikh</a>
                            <span className="badge badge-primary badge-pill">11</span>
                        </div>

                        <div className="list-group-item d-flex justify-content-between align-items-center bg-secondary developerItem">
                            <a href="https://github.com/MansourMoukdad88" className="list-group-item list-group-item-action">Pruduct Owner: Mansour almoukdad</a>
                            <span className="badge badge-primary badge-pill">5</span>
                        </div>

                        <div className="list-group-item d-flex justify-content-between align-items-center bg-secondary developerItem">
                            <a href="https://github.com/ghosoun89" className="list-group-item list-group-item-action">Developer: Ghusoun Aldebea</a>
                            <span className="badge badge-primary badge-pill">5</span>
                        </div>

                        <div className="list-group-item d-flex justify-content-between align-items-center bg-secondary developerItem">
                            <a href="https://github.com/omar-dulaimi" className="list-group-item list-group-item-action">Developer: Omar Dulaimi</a>
                            <span className="badge badge-primary badge-pill">13</span>
                        </div>
                    </div>
                    <a className="btn btn-primary btn-lg" href="mailto:o.m.dulaimi@gmail.com" role="button">Contact us</a>
                </div>
            </Fragment>
        );
    }

}
export default About;