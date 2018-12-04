import React, { Component } from 'react';

class Home extends Component {
    state = {
        numberFact: ''
    }

    componentDidMount() {
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

    render() {
        return (
            <div className="card border-primary mb-3 mt-3 container" style={{ width: '18rem' }}>
                <div className="card-body text-primary">
                    <h5 className="card-title">Fun Number Facts</h5>
                    <p className="card-text">{this.state.numberFact}</p>
                </div>
            </div>
        );
    }
}

export default Home;