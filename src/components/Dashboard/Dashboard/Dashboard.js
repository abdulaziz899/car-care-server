import React from 'react';
import Service from '../../Service/Service/Service';
import ServiceSiteBar from '../../Service/ServiceSiteBar/ServiceSiteBar';

const Dashboard = () => {
    return (
        <div className=''>
            <div className='col-md-3'>
                <ServiceSiteBar></ServiceSiteBar>
            </div>
        </div>
    );
};

export default Dashboard;