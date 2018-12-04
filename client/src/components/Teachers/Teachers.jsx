import React, { Component, Fragment } from 'react';
import './Teachers.css';
import TimeTable from './ClassesComponents/TimeTable.jsx';
import HomeWork from './ClassesComponents/HomeWork.jsx';
import Marks from './ClassesComponents/Marks.jsx';
import WeeklyReports from './ClassesComponents/WeeklyReports.jsx';
import Events from './ClassesComponents/Events.jsx';




class Teachers extends Component {
    render() {
        return (
            
            <Fragment>
                <div className="jumbotron jumbotron-fluid teachers">
                    <div className="container">
                        <h1 className="display-4"> <strong>Teachers Page</strong> <small>example</small></h1>
                        <p class="lead"> Something  Something  Something  Something  Something  Something </p>
                        <div className="dropdown myDropDown">
                           <h4> <span>Dashboard</span></h4>

                        </div>                
                        <div className="dropdown myDropDown">
                            <h5><span>Classes</span></h5>
                            <div className="dropdown-content myDropDown-content">
                                <a><p>TimeTable</p></a>
                                <a><p>Homework</p></a>
                                <a><p>Student's Marks</p></a>
                                <a><p>Weekly Reports</p></a>
                                <a><p>Events</p></a>
                            </div>
                        </div>                
                        <div className="dropdown myDropDown">
                            <h5><span>Students</span></h5>
                            <div className="dropdown-content myDropDown-content">
                                <a><p>Hello World!</p></a>
                                <a><p>Hello World!</p></a>
                                <a><p>Hello World!</p></a>
                            </div>
                        </div>
                        <div className="dropdown myDropDown">
                            <h5><span>Parents</span></h5>
                            <div className="dropdown-content myDropDown-content">
                                <a><p>Grades</p></a>
                                <a><p>Progress</p></a>
                                <a><p>Something</p></a>
                            </div>
                        </div>     
                        <div className="dropdown myDropDown">
                            <h5><span>Chatting</span></h5>
                            <div className="dropdown-content myDropDown-content">
                                <a><p>Admin</p></a>
                                <a><p>Parents</p></a>
                                <a><p>Students</p></a>
                            </div>
                        </div>
                    </div>
                </div>  
                
                <div>
                <TimeTable/>
                </div> 


                <div>
                    <Events />
                    <HomeWork/>
                    <Marks/>
                    <WeeklyReports/>
                    
                </div> 
            </Fragment>
        );
    }

}
export default Teachers;