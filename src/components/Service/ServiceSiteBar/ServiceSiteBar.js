
import { faHistory, faPlus,  faTasks, faUserAlt, faUserCog, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceSiteBar.css';
import CarCare from "../../../img/carCare.jpg" 
import { UserContext } from '../../../App';
const ServiceSiteBar = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    const [isAdmin,setIsAdmin]=useState(false);
    useEffect(()=>{
        const url=`http://localhost:4000/isAdmin`
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email: loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>setIsAdmin(data))
    },[])
    return (
        <div className='siteBarContainer pt-5'>
            <img className='siteBarLogo'  src={CarCare} alt=""/>
            <ul>
               { !isAdmin && <li>
                    <Link to='/yourList'> <FontAwesomeIcon className='mx-3' icon={faHistory}></FontAwesomeIcon>Your Order </Link>
                </li>}
                 {isAdmin && <li>
                    <Link to='/orderList'> <FontAwesomeIcon className='mx-3' icon={faHistory}></FontAwesomeIcon> Order List</Link>
                </li>}
                {isAdmin && <li>
                    <Link to='/addService'><FontAwesomeIcon  className='mx-3' icon={faPlus}></FontAwesomeIcon> Add Service</Link>
                </li>}
                {isAdmin &&<li>
                    <Link to='/makeAdmin'><FontAwesomeIcon  className='mx-3' icon={faUserPlus}></FontAwesomeIcon>Make Admin</Link>
                </li>}
                {isAdmin &&<li>
                    <Link to='/mangeStaff'><FontAwesomeIcon  className='mx-3' icon={faUserCog}></FontAwesomeIcon>Manage Staff</Link>
                </li>}
                {isAdmin &&<li>
                    <Link to='/mangeService'><FontAwesomeIcon  className='mx-3' icon={faTasks}></FontAwesomeIcon>Manage Service</Link>
                </li>}
                {isAdmin &&<li>
                    <Link to='/controlStaff'><FontAwesomeIcon  className='mx-3' icon={faTasks}></FontAwesomeIcon>Control Staff</Link>
                </li>}
                
                <li>
                    <Link to='/review'><FontAwesomeIcon  className='mx-3' icon={faUserPlus}></FontAwesomeIcon>User Review</Link>
                </li>
            </ul>
        </div>
    );
};

export default ServiceSiteBar;