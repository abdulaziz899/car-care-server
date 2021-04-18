import React, { useEffect, useState } from 'react';
import HomePageServiceDetail from '../HomePageServiceDetail/HomePageServiceDetail';

const HomePageService = () => {
    const [service,setService]=useState([]);
    useEffect(()=>{
        const url=`http://localhost:4000/allService`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setService(data);
        })
    },[])
    return (
        <div className='container'>
            <div className='text-center w-50  ml-auto mr-auto'>
                <h2 className='text-center text-info my-5'>What We Do</h2>
                <p className='text-center text-secondary my-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
            </div>
            <div className='row'>
                {
                    service.map(service=><HomePageServiceDetail service={service} key={service._id}></HomePageServiceDetail>)
                }
            </div>
        </div>
    );
};

export default HomePageService;