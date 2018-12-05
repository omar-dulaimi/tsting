import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './Signin.css';

class Signin extends Component {
    state = {
        login: 'false',
        inputEmail: '',
        inputPassword: '',

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
        console.log("handleSubmitPOST body: ", body);
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