import React from 'react';
import './NavBar.css';
import CarCare from "../../../img/carCare.jpg" 
import { Link } from 'react-router-dom';

const NavBar = () => {
    
    return (
        <div className='homeContainer'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#"> <img className='img-fluid w-25' src={CarCare} alt=""/> </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto navBarContainer">
                        <li className="nav-item mr-4 mr-3 active">
                            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        
                        <li className="nav-item mr-4 mr-3">
                            <Link className="nav-link " to='/dashboard'>Disabled</Link>
                        </li>
                        <li className="nav-item mr-4 mr-3">
                            <Link className="nav-link" to='/service'>Service</Link>
                        </li>
                        <li className="nav-item mr-4 mr-3">
                            <Link className="nav-link"  to='/review'>Review</Link>
                        </li>
                        
                    </ul>
                    
                </div>
            </nav>
        </div>
    );
};

export default NavBar;