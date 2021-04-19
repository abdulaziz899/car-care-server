import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import PaymentNow from '../PaymentNow/PaymentNow';
import './BookService.css';

const BookService = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    const [singleService,setSingleService]=useState({});
    const [shippingData, setShippingData] = useState(null);
    const {serviceId}=useParams();
    const { register, handleSubmit,  formState: { errors } } = useForm();
    useEffect(()=>{
        fetch(`https://dry-lowlands-26216.herokuapp.com/services/${serviceId}`)
            .then(res=>res.json())
            .then(data=>{ 
                setSingleService(data); 
                console.log(data); 
            })
    },[]);

    const onSubmit = data => {
        setShippingData(data)
    };

    const handlePaymentSuccessFull = paymentId => {
        const users={
            title:singleService.title,
            name:shippingData.name,
            email:shippingData.email,
            price:singleService.price,
            status:"pending",
            img:singleService.imageURL,
            paymentId,
        };
        console.log(paymentId);
        console.log(users)
        const url=`https://dry-lowlands-26216.herokuapp.com/usersDetails`;
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(users)
          })
          .then(res=>res.json())
          .then(data=>{
              if (data) {
                  alert('your book success fully')
              }
          })
    }
    return (
        <div className='  bookServiceContainer  pt-5'>
            <h2 className='text-capitalize text-center'>Book Service</h2>
            <div className="row">
                <div  style={{display: shippingData ? 'none': 'block'}} className="col-md-6 col-sm-12">
                <div className=' p-5 shadow container mt-5 text-capitalize text-center'>
                        <h2>{singleService.title} </h2>
                        <p className='text-secondary'>${singleService.price}</p>
                        <div>
                            <form  onSubmit={handleSubmit(onSubmit)}>
                            <div className='my-3 shadow'>
                                <label htmlFor="name">Name</label>
                                <input className='form-control' placeholder=' name' name='name'  {...register("name",{ required: true })} />
                                {errors.name && <span className='my-2 text-danger'>This field is required</span>}
                            </div>
                            <div className='my-3 shadow'>
                                <label htmlFor="email">Email</label>
                                <input className='form-control' placeholder='email' name='email'  {...register("email",{ required: true })} />
                                {errors.email && <span className='my-2 text-danger'>This field is required</span>}
                            </div>
                            <div className='my-3 shadow'>
                                <label htmlFor="phone">Phone</label>
                                <input className='form-control' placeholder='phone' name='phone'  {...register("phone",{ required: true })} />
                                {errors.phone && <span className='my-2 text-danger'>This field is required</span>}
                            </div>
                            
                            <div className='text-center mb-5'>
                                <button type='submit' className="btn btn-outline-danger">Booking service </button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div style={{display: shippingData ? 'block': 'none'}}  className="col-md-6 col-sm-12 pt-5">
                    <h2 className='pt-5'>please pay for service </h2>
                    <PaymentNow handlePaymentSuccessFull={handlePaymentSuccessFull}></PaymentNow>
                </div>
            </div>
        </div>
    );
};

export default BookService;