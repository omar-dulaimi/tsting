import React, { Component } from 'react';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount() {
        console.log("///////////11", this.props.location);
    }
    render() {
        return (
            <div>
                {/* <h1>{this.props.location.state.user.user}</h1> */}
                <h1>Admin is Here!</h1>

            </div>

        );
    }

}
export default Admin;