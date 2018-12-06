import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './Signin.css';
import { stat } from 'fs';

class Signin extends Component {
    state = {
        inputEmail: '',
        inputPassword: '',
        currentUser: []

    };

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
        let status = JSON.parse(body);
        this.setState({ currentUser: status });
        console.log('currentUser = ', this.state.currentUser);
        // this.setState({ canLogin: status.canLog });
        // console.log("handleSubmitPOST body: ", this.state.canLogin);

    }


    render() {
        if (this.state.currentUser.canLog && this.state.currentUser.user === 'admin') {
            return <Redirect to={{ pathname: '/admin', state: { user: this.state.currentUser } }} />
        }
        // else if (this.state.currentUser.canLog && this.state.currentUser.user === 'teacher') {
        //     return <Redirect to={{ pathname: '/teachers', state: { user: this.state.currentUser } }} />
        // } else if (this.state.currentUser.canLog && this.state.currentUser.user === 'parent') {
        //     return <Redirect to={{ pathname: '/parents', state: { currentUser: this.state.currentUser } }} />
        // }

        return (
            <div className="container" >
                <div className="row">
                    <form className="form-signin col align-middle mt-5" onSubmit={this.handleSubmitPOST}>
                        <span className="mbr-iconfont fa fa-user centerusericon mb-3" alt width={72} height={72} />
                        <h1 className="h3 mb-5 font-weight-normal centerusericon">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input
                            type="email"
                            id="inputEmail"
                            className="form-control mb-4"
                            placeholder="Email address"
                            value={this.state.inputEmail}
                            onChange={e => this.setState({ inputEmail: e.target.value })}
                            required autofocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input
                            type="password"
                            id="inputPassword"
                            className="form-control mb-4"
                            placeholder="Password"
                            value={this.state.inputPassword}
                            onChange={e => this.setState({ inputPassword: e.target.value })}
                            required />
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" defaultValue="remember-me" /> Remember me
                        </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmitPOST}>Sign in</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default Signin;