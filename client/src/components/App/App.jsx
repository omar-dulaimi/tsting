import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import Home from '../Home/Home.jsx';
import Parents from '../Parents/Parents.jsx';
import Teachers from '../Teachers/Teachers.jsx';
import Admin from '../Admin/Admin.jsx';
import About from '../About/About.jsx';
import Signin from '../Signin/Signin.jsx';
import Main from '../Main/Main.jsx'

class App extends Component {
  ;

  render() {
    return (
      <Fragment>
        <Main />
      </Fragment >
    );
  }
}

export default App;
