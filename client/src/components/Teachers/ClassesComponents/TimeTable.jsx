import React, { Component, Fragment } from 'react';
//import '../../../index.css';
import '../Teachers.css';


class TimeTable extends Component {

    render() {
        return (
            <Fragment>
                <div className="timetable">
                <h1>TimeTable Component</h1>
                    <div>
                        <h1>My Timetable</h1>
                        <table className="myTimetable">
                            <thead>
                                <tr>
                                    <th />
                                    <th>Sunday</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>P1</td>
                                    <td>
                                        <div className="subject">Maths</div>
                                        <div className="room">A120</div>
                                    </td>
                                    <td>
                                        <div className="subject">Art</div>
                                        <div className="room">C1</div>
                                    </td>
                                    <td>
                                        <div className="subject">English</div>
                                        <div className="room">B21</div>
                                    </td>
                                    <td>
                                        <div className="subject">Maths</div>
                                        <div className="room">A120</div>
                                    </td>
                                    <td>
                                        <div className="subject">Geography</div>
                                        <div className="room">B101</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>P2</td>
                                    <td>
                                        <div className="subject">Science</div>
                                        <div className="room">Lab1</div>
                                    </td>
                                    <td>
                                        <div className="subject">History</div>
                                        <div className="room">B104</div>
                                    </td>
                                    <td>
                                        <div className="subject">Spanish</div>
                                        <div className="room">C17</div>
                                    </td>
                                    <td>
                                        <div className="subject">P.E.</div>
                                        <div className="room">A Gym</div>
                                    </td>
                                    <td>
                                        <div className="subject">Maths</div>
                                        <div className="room">A120</div>
                                    </td>
                                </tr>
                              
                                <tr>
                                    <td>P3</td>
                                    <td>
                                        <div className="subject">I.T.</div>
                                        <div className="room">ICT 1</div>
                                    </td>
                                    <td>
                                        <div className="subject">English</div>
                                        <div className="room">B21</div>
                                    </td>
                                    <td>
                                        <div className="subject">Musique</div>
                                        <div className="room">C5</div>
                                    </td>
                                    <td>
                                        <div className="subject">English</div>
                                        <div className="room">B21</div>
                                    </td>
                                    <td>
                                        <div className="subject">PSHE</div>
                                        <div className="room">A24</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={6} className="lunch">Lunch</td>
                                </tr>
                                <tr>
                                    <td>P4</td>
                                    <td>
                                        <div className="subject">History</div>
                                        <div className="room">B104</div>
                                    </td>
                                    <td>
                                        <div className="subject">Drama</div>
                                        <div className="room">C17</div>
                                    </td>
                                    <td>
                                        <div className="subject">Maths</div>
                                        <div className="room">A120</div>
                                    </td>
                                    <td>
                                        <div className="subject">Geography</div>
                                        <div className="room">B101</div>
                                    </td>
                                    <td>
                                        <div className="subject">P.E.</div>
                                        <div className="room">A Gym</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>P5</td>
                                    <td>
                                        <div className="subject">Spanish</div>
                                        <div className="room">C17</div>
                                    </td>
                                    <td>
                                        <div className="subject">Science</div>
                                        <div className="room">Lab1</div>
                                    </td>
                                    <td>
                                        <div className="subject">English</div>
                                        <div className="room">B21</div>
                                    </td>
                                    <td>
                                        <div className="subject">Science</div>
                                        <div className="room">Lab1</div>
                                    </td>
                                    <td>
                                        <div className="subject">R.E.</div>
                                        <div className="room">B18</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                
                </div>
            </Fragment>

        )
    }

}
export default TimeTable;
