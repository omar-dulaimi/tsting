import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Calendar from 'react-calendar'

import Parents from '../Parents/Parents.jsx';
import Teachers from '../Teachers/Teachers.jsx';
import Admin from '../Admin/Admin.jsx';
import About from '../About/About.jsx';
import Signin from '../Signin/Signin.jsx';
import logo from './logo.png';

import './Home.css';

class Home extends Component {
    state = {
        date: new Date(),
        numberFact: '',
        activeNavBarLink: ''
    }

    componentDidMount() {
        this.handleNavBarActive('home');
        this.getNumberFact().then(data => {
            this.setState({ numberFact: data.fact });
        }).catch(err => console.log(err));
    }

    //Get a number fact from the server
    getNumberFact = async () => {
        const response = await fetch('/numberfact');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    //According to state -> add or remove classes
    NavBarItemActive = (value) => {
        return 'nav-item ' + ((value === this.state.selected) ? 'active' : '');
    }

    //Change selected item to current value
    handleNavBarActive = (value) => {
        this.setState({ selected: value });
    }


    onChange = date => this.setState({ date })

    render() {
        return (
            <Fragment>
                <Router>
                    <div>
                        { /* Navbar */}
                        < nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
                            <nav className="navbar navbar-light bg-light">
                                <Link className="navbar-brand" to="/"><img src={logo} className="logo" alt="website logo" /></Link>
                            </nav>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className={this.NavBarItemActive('home')} onClick={this.handleNavBarActive.bind(this, 'home')}>
                                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                    </li>

                                    <li className={this.NavBarItemActive('about')} onClick={this.handleNavBarActive.bind(this, 'about')}>
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Fun
                    </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link className="dropdown-item" to="#">Action</Link>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                            <Link className="dropdown-item" to="#">Something else here</Link>
                                        </div>
                                    </li>

                                </ul>

                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/signin" id="signinbtn">Sign In</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav >
                        { /* Navbar */}

                        {/* Routing */}
                        <Route exact path="/about" component={About} />
                        <Route exact path="/signin" component={Signin} />
                        <Route exact path="/admin" component={Admin} />
                        <Route exact path="/teachers" component={Teachers} />
                        <Route exact path="/parents" component={Parents} />
                    </div>
                </Router>


                <div className="row">
                    <div className="col-md-2 ml-3">
                        <div className="card border-primary mb-3 mt-3" style={{ width: '18rem', height: '350px' }}>
                            <div className="card-body text-primary">
                                <h5 className="card-title">Fun Number Facts</h5>
                                <p className="card-text">{this.state.numberFact}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 mb-3 mt-3 ml-3">
                        <Calendar
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Home;