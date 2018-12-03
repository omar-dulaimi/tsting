import React, { Component, Fragment } from 'react';
import { Button, PageHeader, ButtonToolbar, OverlayTrigger, Popover, Carousel } from 'react-bootstrap';
import './Teachers.css';



var slideIndex = 1;
//showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

class Teachers extends Component {

    

    render() {
        return (
            
            <Fragment>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4"> Teachers Page <small>example</small></h1>
                        <p class="lead"> Something  Something  Something  Something  Something  Something </p>
                        <div className="dropdown">
                           <h4> <span>Dashboard</span></h4>

                        </div>                
                        <div className="dropdown">
                            <span>Classes</span>
                            <div className="dropdown-content">
                                <p>TimeTable</p>
                                <p>Homework</p>
                                <p>Something</p>

                            </div>
                        </div>                
                                  
                        <div className="dropdown">
                            <span>Students</span>
                            <div className="dropdown-content">
                                <p>Hello World!</p>
                                <p>Hello World!</p>
                                <p>Hello World!</p>
                            </div>
                        </div>
                        <div className="dropdown">
                            <span>Parents</span>
                            <div className="dropdown-content">
                                <p>Grades</p>
                                <p>Progress</p>
                                <p>Something</p>

                            </div>
                        </div>     
                        <div className="dropdown">
                            <span>Chatting</span>
                            <div className="dropdown-content">
                                <p>Admin</p>
                                <p>Parents</p>
                                <p>Students</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w3-container">
                        <h2>Slideshow Caption</h2>
                        <p>Add a caption text for each image slide with the w3-display-* classes (topleft, topmiddle, topright, bottomleft, bottommiddle, bottomright or middle).</p>
                    </div>
                    <div className="w3-content w3-display-container">
                        <div className="w3-display-container mySlides">
                            <img src="img_snowtops.jpg" style={{ width: '100%' }} />
                            <div className="w3-display-bottomleft w3-large w3-container w3-padding-16 w3-black">
                                French Alps
                      </div>
                        </div>
                        <div className="w3-display-container mySlides">
                            <img src="img_lights.jpg" style={{ width: '100%' }} />
                            <div className="w3-display-bottomright w3-large w3-container w3-padding-16 w3-black">
                                Northern Lights
                       </div>
                        </div>
                        <div className="w3-display-container mySlides">
                            <img src="img_mountains.jpg" style={{ width: '100%' }} />
                            <div className="w3-display-topleft w3-large w3-container w3-padding-16 w3-black">
                                Beautiful Mountains
                         </div>
                        </div>
                        <div className="w3-display-container mySlides">
                            <img src="img_forest.jpg" style={{ width: '100%' }} />
                            <div className="w3-display-topright w3-large w3-container w3-padding-16 w3-black">
                                The Rain Forest
                        </div>
                        </div>
                        <div className="w3-display-container mySlides">
                            <img src="img_mountains.jpg" style={{ width: '100%' }} />
                            <div className="w3-display-middle w3-large w3-container w3-padding-16 w3-black">
                                Mountains!
                        </div>
                        </div>
                        <button className="w3-button w3-display-left w3-black" onclick="plusDivs(-1)">❮</button>
                        <button className="w3-button w3-display-right w3-black" onclick="plusDivs(1)">❯</button>
                    </div>
                </div>
                </Fragment>
                

                
    
        );
    }

}
export default Teachers;