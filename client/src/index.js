import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Parents from './components/Parents/Parents.jsx';
import Teachers from './components/Teachers/Teachers.jsx';
import Admin from './components/Admin/Admin.jsx';
import About from './components/About/About.jsx';
import Signin from './components/Signin/Signin.jsx';
import Home from './components/Home/Home.jsx'
import Main from './components/Main/Main.jsx'
class Routers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={App} />
                    <Route path="/about" exact component={About} />
                    <Route path="/signin" component={Signin} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/teachers" component={Teachers} />
                    <Route path="/parents" component={Parents} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Routers />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
