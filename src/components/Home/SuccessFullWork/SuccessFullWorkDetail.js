import React from 'react';

const SuccessFullWorkDetail = (props) => {
    const {img,name,email,title,status,price}=props.work;

    return (
        <div className='col-md-4 col-sm-12'>
            {
                status==='done'&& <div className='workContainer text-center py-3 shadow'>
                                    <h3>{name}</h3>
                                    <h4>{title}</h4>
                                    <p>${price}</p>
                                    <img src={img} alt=""/>
                                </div>
            }
        </div>
    );
};

export default SuccessFullWorkDetail;