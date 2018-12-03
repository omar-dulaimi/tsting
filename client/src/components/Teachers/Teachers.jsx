import React, { Component, Fragment } from 'react';
import './Teachers.css';



class Teachers extends Component {
    render() {
        return (
            
            <Fragment>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4"> Teachers Page <small>example</small></h1>
                        <p class="lead"> Something  Something  Something  Something  Something  Something </p>
                        <div className="dropdown myDropDown">
                           <h4> <span>Dashboard</span></h4>

                        </div>                
                        <div className="dropdown myDropDown">
                            <span>Classes</span>
                            <div className="dropdown-content myDropDown-content">
                                <a><p>TimeTable</p></a>
                                <a><p>Homework</p></a>
                                <a><p>Something</p></a>

                            </div>
                        </div>                
                                  
                        <div className="dropdown myDropDown">
                            <span>Students</span>
                            <div className="dropdown-content myDropDown-content">
                                <a><p>Hello World!</p></a>
                                <a><p>Hello World!</p></a>
                                <a><p>Hello World!</p></a>
                            </div>
                        </div>
                        <div className="dropdown myDropDown">
                            <span>Parents</span>
                            <div className="dropdown-content myDropDown-content">
                                <a><p>Grades</p></a>
                                <a><p>Progress</p></a>
                                <a><p>Something</p></a>

                            </div>
                        </div>     
                        <div className="dropdown myDropDown">
                            <span>Chatting</span>
                            <div className="dropdown-content myDropDown-content">
                                <a><p>Admin</p></a>
                                <a><p>Parents</p></a>
                                <a><p>Students</p></a>
                            </div>
                        </div>
                    </div>
                </div>
               
                </Fragment>
                

                
    
        );
    }

}
export default Teachers;