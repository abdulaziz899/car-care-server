import React, { useEffect, useState } from 'react';
import './SuccessFullWork.css';
import SuccessFullWorkDetail from './SuccessFullWorkDetail';
const SuccessFullWork = () => {
    const [successFullWork,setSuccessFullWork]=useState([]);
    useEffect(()=>{
        const url=`https://dry-lowlands-26216.herokuapp.com/successFullProject`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setSuccessFullWork(data);
        })
    },[])
    return (
        <div className='container'>
            <h2 className='text-center text-success py-4'> Some Of Success Full Working Project</h2>
                <div className="row my-3">
                    {
                        successFullWork.map(work=><SuccessFullWorkDetail work={work} key={work._id}></SuccessFullWorkDetail>)
                    }
                </div>
        </div>
    );
};

export default SuccessFullWork;