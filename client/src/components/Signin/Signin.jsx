import React, { Component } from 'react';
import './Signin.css';

class Signin extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form className="form-signin col align-middle mt-5">
                        <span className="mbr-iconfont fa fa-user centerusericon mb-3" alt width={72} height={72} />
                        <h1 className="h3 mb-5 font-weight-normal centerusericon">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control mb-4" placeholder="Email address" required autofocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control mb-4" placeholder="Password" required />
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" defaultValue="remember-me" /> Remember me
                        </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        );
    }

}
export default Signin;