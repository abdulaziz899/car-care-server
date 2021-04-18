import React from 'react';

const UserOrderDetail = (props) => {
    const {name,title,price,_id,status}=props.order;
    return (
        <div className='col-md-4  text-center  my-3 text-capitalize text-secondary '>
            <div className='bg-white shadow py-4'>
                <h3 className='text-success'>{name}</h3>
                <p>{title}</p>
                <p className='text-info'>${price}</p>
                <button className="btn disabled btn-outline-info">{status}</button>
            </div>
        </div>
    );
};

export default UserOrderDetail;