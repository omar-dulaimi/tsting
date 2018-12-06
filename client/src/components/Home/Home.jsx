import React, { Component, Fragment } from 'react';
import Calendar from 'react-calendar'

class Home extends Component {
    state = {
        date: new Date(),
        numberFact: '',
        activeNavBarLink: ''
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


    onChange = date => this.setState({ date })

    render() {
        return (
            <Fragment>
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