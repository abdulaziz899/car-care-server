import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceSiteBar from '../../Service/ServiceSiteBar/ServiceSiteBar';
import OrderDetail from '../OrderDetail/OrderDetail';
import './Orders.css';
const Orders = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/usersDetailShow?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setOrders(data)
        })
    },[])
    return (
        <div className='bg-dark ordersContainer'>
            <div className="">
                <div className="row">
                    <div className="col-md-3 ">
                        <ServiceSiteBar></ServiceSiteBar>
                    </div>
                    <div className="col-md-9">
                        <div className='d-flex justify-content-between pt-5'>
                                <h1>All User Order</h1>
                                <img className='imgControls' src={loggedInUser.img} alt=""/>
                        </div>
                        <div className="row pr-3">
                            {
                                orders.map(order=><OrderDetail order={order} key={order._key}></OrderDetail>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;