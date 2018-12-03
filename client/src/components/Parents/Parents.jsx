import React, { Component, Fragment } from 'react';
import './Parents.css';

class Parents extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <h1>Parents Page:</h1>
                </div>
                <form>
                    <div className="btn-group">
                        <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Children
                        </button>
                        <div className="dropdown-menu .mymenu ">
                            <a className="dropdown-item .muitem " href="#">Ahamed</a>
                            <a className="dropdown-item .muitem " href="#">Khalid</a>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Teachers
                    </button>
                        <div className="dropdown-menu .mymenu ">
                            <a className="dropdown-item .muitem " href="#">Sarah:English</a>
                            <a className="dropdown-item .muitem " href="#">Khalid:Math</a>
                            <a className="dropdown-item .muitem " href="#">Omer:Arabic</a>
                            <a className="dropdown-item .muitem " href="#">Ashraf:Sience</a>
                        </div>
                    </div>

                    <button type="button" className="btn btn-info" >Timetable</button>

                    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal" >Complians</button>
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <div className="form-group">
                                        <label for="Parentes-name" className="col-form-label">Name</label>
                                        <input type="text" className="form-control" id="Parentes-name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="message-text" className="col-form-label">Title</label>
                                        <input type="text" className="form-control" id="Title-name" />
                                    </div>

                                    <div className="form-group">
                                        <label for="message-text" className="col-form-label">Message:</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-info">Send message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <form>
                </form>
            </Fragment>
        );
    }
}

export default Parents;