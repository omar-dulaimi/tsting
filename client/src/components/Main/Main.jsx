import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Parents from '../Parents/Parents.jsx';
import Teachers from '../Teachers/Teachers.jsx';
import Admin from '../Admin/Admin.jsx';
import About from '../About/About.jsx';
import Signin from '../Signin/Signin.jsx';
import Home from '../Home/Home.jsx'
import logo from './logo.png';

import './Main.css';

class Main extends Component {
    state = {
        date: new Date(),
        activeNavBarLink: '',

        post: '',
        get: '',
        responseToPost: 'Click the button to Post',
        responseToGet: 'Click the button to Get',
        responseToGetAuto: 'This will Auto Change',
    }

    /*
    Read about:
    componentDidMount()
    https://reactjs.org/docs/react-component.html#componentdidmount
    */

    componentDidMount() {
        this.handleNavBarActive('home');
        this.callApiHi()
            .then(res => this.setState({ responseToGetAuto: res.express }))
            .catch(err => console.log(err));
    }

    //According to state -> add or remove classes
    NavBarItemActive = (value) => {
        return 'nav-item ' + ((value === this.state.selected) ? 'active' : '');
    }

    //Change selected item to current value
    handleNavBarActive = (value) => {
        this.setState({ selected: value });
    }

    onChange = date => this.setState({ date });


    /* 
   MDN Fetch() / jquery ajax()
   
   Read about Fetch API: 
   https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

   Read about async () =>
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

   Read about await:
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

   Notes how this function invoked:

   - callApiHi on client load fetch for get /api/hi using componentDidMount()
   - handleSubmitGET on button "Get /api/hello" clicked (using fetch get)
   - handleSubmitPOST on button "Post /api/world" clicked (using fetch Post)
 */

    callApiHi = async () => {
        const response = await fetch('/GetTest1');
        const body = await response.json();
        console.log("callApiHi body: ", body.express);
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    /*
    Read about Events Handling (In our case, Clicking the form submit button)
    Notes that we use variable e for event 
    
    e.preventDefault();
    https://reactjs.org/docs/handling-events.html
    */

    handleSubmitGET = async e => {
        e.preventDefault();
        const response = await fetch('/GetTest2');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        console.log("handleSubmitGET body: ", body);
        this.setState({ responseToGet: body.express });
    };

    handleSubmitPOST = async e => {
        e.preventDefault();
        const response = await fetch('/PostTest1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post: this.state.post }),
        });
        const body = await response.text();
        this.setState({ responseToPost: body });
        console.log("handleSubmitPOST body: ", body);
    };

    render() {
        return (
            <Fragment>
                {/* <Router> */}
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
                    {/* <Route exact path="/about" component={About} />
                        <Route exact path="/signin" component={Signin} />
                        <Route exact path="/admin" component={Admin} />
                        <Route exact path="/teachers" component={Teachers} />
                        <Route exact path="/parents" component={Parents} /> */}
                </div>
                {/* </Router> */}


                <Home />

                {/* Testing Components*/}
                <div className="DivNotes">
                    {/* /* 
Read New Semantic Elements in HTML5: (<header> <nav> <section> <footer>)
https://www.w3schools.com/html/html5_semantic_elements.asp

*/}

                    <header className="App-header">
                        <hr />
                        <div className="DivNotes">
                            <h2>Testing Part:</h2>
                        </div>
                    </header>

                    <section>
                        <Parents />
                        <hr />
                        <Teachers />
                        <hr />
                        <Admin />
                    </section>

                    <div className="DivNotes">
                        <h3>From componentDidMount() > callApiHi</h3>
                        <p>{this.state.responseToGetAuto}</p>
                    </div>
                    <div className="DivNotes">
                        <h3>Form Get:</h3>
                        <form onSubmit={this.handleSubmitGET}>
                            <p>
                                <strong>Get From Server:</strong>
                            </p>
                            <button type="submit">Get /api/hello</button>
                        </form>
                        <p>{this.state.responseToGet}</p>
                    </div>
                    <div className="DivNotes">
                        <h3>Form Post:</h3>
                        <form onSubmit={this.handleSubmitPOST}>
                            <p>
                                <strong>Post to Server:</strong>
                            </p>
                            <input
                                type="text"
                                value={this.state.post}
                                onChange={e => this.setState({ post: e.target.value })}
                            />
                            <button type="submit">Post /api/world</button>
                        </form>
                        <p>{this.state.responseToPost}</p>
                    </div>

                    <footer>
                        <hr />
                        <p>Have a nice day!</p>
                    </footer>
                </div>
            </Fragment>
        );
    }
}

export default Main;