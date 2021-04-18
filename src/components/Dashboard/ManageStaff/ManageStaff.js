import React, { useEffect, useState } from 'react';
import ServiceSiteBar from '../../Service/ServiceSiteBar/ServiceSiteBar';
import ManageServiceDetail from '../ManageServiceDetali/ManageServiceDetail';
import ManageStaffDetail from '../ManageStaffDetail/ManageStaffDetail';

const ManageStaff = () => {
    const [manageStaff,setManageStaff]=useState([]);
    useEffect(()=>{
        const url=`http://localhost:4000/allStaff`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setManageStaff(data);
        })
    },[])
    return (
        <div className=''>
            <div className="row">
                <div className="col-md-3">
                    <ServiceSiteBar></ServiceSiteBar>
                </div>
                <div className="col-md-9 mt-5">
                    <h2 className='text-capitalize text-center text-info'>manage Staff</h2>

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
                                manageStaff.map((manageStaff,index)=><ManageStaffDetail index={index} manageStaff={manageStaff} key={manageStaff._id}></ManageStaffDetail>)
                            }
                            </tbody>
                       
                    </table>

                </div>
            </div>
        </div>
    );
};

export default ManageStaff;