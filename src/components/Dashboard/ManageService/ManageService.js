import React, { useEffect, useState } from 'react';
import ServiceSiteBar from '../../Service/ServiceSiteBar/ServiceSiteBar';
import ManageServiceDetail from '../ManageServiceDetali/ManageServiceDetail';

const ManageService = () => {
    const [manageService,setManageService]=useState([]);
    useEffect(()=>{
        const url=`https://dry-lowlands-26216.herokuapp.com/allService`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setManageService(data);
        })
    },[])
    return (
        <div className=''>
            <div className="row">
                <div className="col-md-3">
                    <ServiceSiteBar></ServiceSiteBar>
                </div>
                <div className="col-md-9 mt-5">
                    <h2 className='text-capitalize text-center text-info'>manage service</h2>

                    <table className='table'>
                        <thead>
                            <tr>
                            <th className="text-secondary" scope="col">SL</th>
                            <th className="text-secondary" scope="col">Title</th>
                            <th className="text-secondary" scope="col">Description</th>
                            <th className="text-secondary" scope="col">Image</th>
                            <th className="text-secondary" scope="col">Action</th>
                            </tr>
                        </thead>
                            <tbody>
                            {
                                manageService.map((manageService,index)=><ManageServiceDetail index={index} manageService={manageService} key={manageService._id}></ManageServiceDetail>)
                            }
                            </tbody>
                       
                    </table>

                </div>
            </div>
        </div>
    );
};

export default ManageService;