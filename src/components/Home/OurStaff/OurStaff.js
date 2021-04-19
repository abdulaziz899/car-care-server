import React, { useEffect, useState } from 'react';
import HomePageStaff from '../HomePageStaff/HomePageStaff';

const OurStaff = () => {
    const [Staffs,setStaffs]=useState([]);
    useEffect(()=>{
        const url=`https://dry-lowlands-26216.herokuapp.com/allStaff`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setStaffs(data);
        })
    },[])
    return (
        <div className='container'>
            <div className='w-50  ml-auto mr-auto  my-5'>
                <div className='my-3'>
                    <h2 className='text-info text-center'>Meet Our Staff</h2>
                    <p className='text-center my-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus 
                        lectus malesuada libero, sit amet commodo magna eros quis urna.
                    </p>
                </div>
            </div>
            <div className='row container-fluid' >
                {
                    Staffs.map(staff=><HomePageStaff staff={staff} key={staff._id}></HomePageStaff>)
                }
            </div>
        </div>
    );
};

export default OurStaff;