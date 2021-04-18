import React from 'react';
import ServiceSiteBar from '../ServiceSiteBar/ServiceSiteBar';
import CarCare from "../../../img/carCare.jpg" 
import AddServiceFrom from '../AddServiceFrom/AddServiceFrom';
const Service = () => {
    return (
        <div className=''>
           <div className="row">
                <div className="col-md-9">
                    <AddServiceFrom></AddServiceFrom>
                </div>
           </div>
        </div>
    );
};

export default Service;