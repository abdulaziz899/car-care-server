import React from 'react';
import './HomePageStaff.css';
const HomePageStaff = (props) => {
    console.log(props);
    const {title,imageURL,name,email}=props.staff;
    return (
        <div className='col-md-4 col-sm-12 imgControls text-center'>
            {imageURL && <div className='shadow py-5'  >
                <img src={imageURL} alt=""/>
                <h2 className='text-info'>{name}</h2>
                <h4 className='text-secondary'>{title}</h4>
                <p>{email}</p>
            </div>}
        </div>
    );
};

export default HomePageStaff;