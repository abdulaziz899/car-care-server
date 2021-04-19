import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceSiteBar from '../../Service/ServiceSiteBar/ServiceSiteBar';
import UserOrderDetail from '../UserOrderDetail/UserOrderDetail';

const UserOrder = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        fetch('https://dry-lowlands-26216.herokuapp.com/usersDetailShow?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setOrders(data)
        })
    },[])
    return (
        <div className='bg-secondary'>
            <div className="row">
                <div className="col-md-3 ">
                    <ServiceSiteBar></ServiceSiteBar>
                </div>
                <div className="col-md-9 pt-5 ">
                    <div className='d-flex justify-content-around'>
                        <h2 className=' text-success pt-4'>Your Previous Order List</h2>
                        <img className='rounded-circle' src={loggedInUser.img} alt=""/>
                    </div>
                    <div className="row mr-2">
                        {
                            orders.map(order=><UserOrderDetail key={order._id} order={order}></UserOrderDetail>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserOrder;