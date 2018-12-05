import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './Signin.css';

class Signin extends Component {
    state = {
        login: 'false',
        inputEmail: '',
        inputPassword: '',

        userInputEmail: '',
        userInputPassword: '',
        loggedIn: false,
        userType: ''
    }


    handleSubmitPOST = async e => {
        e.preventDefault();
        const response = await fetch('/S_signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ inputEmail: this.state.inputEmail, inputPassword: this.state.inputPassword }),
        });
        
        const body = await response.text();
        console.log(body);
        //this.setState({ login: body });
        console.log("handleSubmitPOST body: ", body);
    }

    //get email from input field
    handleEmailChange = ({ target: { value } }) => {
        this.setState({ userInputEmail: value });
    }

    //get password from input field
    handlePasswordChange = ({ target: { value } }) => {
        this.setState({ userInputPassword: value });
    }

    postUser = async event => {
        const response = await fetch('/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: this.state.userInputEmail }),
        });
        const user = await response.text();
        // this.setState({ responseToPost: body });
        this.state.userType = user;
        console.log("postUser: ", user);

    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.userInputEmail, this.state.userInputPassword);
        this.postUser();
        // this.getUser();
        //compare current data with data in database
    }


    render() {
        if (this.state.userType === 'admin') {
            return <Redirect to={{ pathname: '/admin' }} />
        } else if (this.state.userType === 'teacher') {
            return <Redirect to={{ pathname: '/teachers' }} />
        } else if (this.state.userType === 'parent') {
            return <Redirect to={{ pathname: '/parents' }} />
        } else if (this.state.userType === 'no such user!') {
            return <Redirect to={{ pathname: '/' }} />
        }

        return (
            <div className="container" >
                <div className="row">
                    <form className="form-signin col align-middle mt-5">
                        <span className="mbr-iconfont fa fa-user centerusericon mb-3" alt width={72} height={72} />
                        <h1 className="h3 mb-5 font-weight-normal centerusericon">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control mb-4" onChange={this.handleEmailChange} value={this.state.userInputEmail} placeholder="Email address" required autofocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control mb-4" onChange={this.handlePasswordChange} value={this.state.userInputPassword} placeholder="Password" required />
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" defaultValue="remember-me" /> Remember me
                        </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit}>Sign in</button>
                    </form>
                </div>
            </div>
        );
        /**
         * return (
            <div className="container" >
                <div className="row">
                    <form className="form-signin col align-middle mt-5">
                        <span className="mbr-iconfont fa fa-user centerusericon mb-3" alt width={72} height={72} />
                        <h1 className="h3 mb-5 font-weight-normal centerusericon">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control mb-4" onChange={this.handleEmailChange} value={this.state.userInputEmail} placeholder="Email address" required autofocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control mb-4" onChange={this.handlePasswordChange} value={this.state.userInputPassword} placeholder="Password" required />
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" defaultValue="remember-me" /> Remember me
                        </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit}>Sign in</button>
                    </form>
                </div>
            </div>
        );
         */
    }

}

export default Signin;