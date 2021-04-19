import React, { useState } from 'react';
;

const OrderDetail = (props) => {
    console.log(props);
    const {name,title,price,_id,status}=props.order;
    const [orderState,setOrderState]=useState({
        status:status
    });
    
    const statusOnGoing=(id)=>{
        const info={...orderState};
        info.status="on going";
        setOrderState(info);
        console.log(info,id);
        fetch(`https://dry-lowlands-26216.herokuapp.com/update/${id}`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(info)
        })
        .then(res=>res.json())
        .then(data=>console.log("updated",data))
    }
    const statusDone=(id)=>{
        const info={...orderState};
        info.status="done";
        setOrderState(info);
        fetch(`https://dry-lowlands-26216.herokuapp.com/update/${id}`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(info)
        })
        .then(res=>res.json())
        .then(data=>console.log("updated",data))
    }
    return (
        <div className="col-md-4">
            <div className='allOrders my-2'>
                <h2>Name :{name} </h2>
                <h4> Service:{title}</h4>
                <p> Price :${price}</p>
                <p> Status :{orderState.status}</p>
                <div className='mr-2'>
                    <button  className="btn btn-outline-danger disabled ml-2">pending</button>
                    {status==='on going'?<button className="btn btn-outline-danger disabled ml-2">On Going</button>:<button onClick={()=>statusOnGoing(_id)} className="btn btn-outline-danger  ml-2">On Going</button>}
                    {status==='done'?<button  className="btn btn-outline-danger disabled  ml-2">Done</button>:<button  onClick={()=>statusDone(_id)} className="btn btn-outline-danger  ml-2">Done</button>}
                </div>
            </div>
        </div>
        
    );
};

export default OrderDetail;