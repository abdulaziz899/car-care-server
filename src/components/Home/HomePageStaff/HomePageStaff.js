import React from 'react';
import './HomePageStaff.css';
const HomePageStaff = (props) => {
    const {title,imageURL,name}=props.staff;
    return (
        <div className='col-md-4 col-sm-12'>
            <div className='imgControls'>
            {imageURL && <div  >
                <img src={imageURL} alt=""/>
                <h2 className='text-info'>{name}</h2>
                <h4 className='text-secondary'>{title}</h4>
            </div>}
            </div>
            </div>
    );
};

export default HomePageStaff;