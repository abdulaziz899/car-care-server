import React from 'react';
import { useHistory, useParams } from 'react-router';

const HomePageServiceDetail = (props) => {
    const {title,imageURL,description,price,_id}=props.service;
    const {serviceId}=useParams();
    const history=useHistory();
    const handleService=(id)=>{
        console.log(id);
        const url=`/services/${id}`
        history.push(url);
    }
    return (
        <div onClick={()=>handleService(_id)} className='col-md-4 col-sm-12'>
            <div>
                <img className='imgControl' src={imageURL} alt=""/>
                <h2>{title}</h2>
                <p>{description}</p>
                <p className='text-info'><b>${price}</b></p>
            </div>
        </div>
    );
};

export default HomePageServiceDetail;