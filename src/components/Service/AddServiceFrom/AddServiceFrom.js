import axios from 'axios';
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import ServiceSiteBar from '../ServiceSiteBar/ServiceSiteBar';

const AddServiceFrom = () => {
    const [imageURL,setImageURL]=useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const manageStaff={
            title:data.title,
            imageURL:imageURL,
            price:data.price,
            description:data.description,
        };
        console.log(data);
        console.log(manageStaff)
        const url=`https://dry-lowlands-26216.herokuapp.com/addService`;
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(manageStaff)
          })
          .then(res=>res.json())
          .then(data=>
           { if(data){
                alert("service add success")
            }
        }
            )
        
    };


    const handleFileUpload=event=>{
        console.log(event.target.files[0]);
        const imagesData=new FormData();
        imagesData.set('key','bf5c3fadee63cad4bf7827553934803d');
        imagesData.append('image',event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imagesData)
          .then(function (response) {
            console.log(response.data.data.display_url);
           
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  
    return (
        <div className=''>
            <div className="row">
            <div className='col-md-3'>
                <ServiceSiteBar></ServiceSiteBar>
            </div>
            <div className='col-md-9'>
                <div className='row mt-3 mb-3'>
                    <div className="col-md-6">
                        <h2 className='text-success'>Add Service</h2>
                    </div>
                    <div className="col-md-6 ">
                        <h2 className='text-right'>aziz</h2>
                    </div>
                </div>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <div className='my-3 shadow'>
                        <label htmlFor="title">Service Title</label>
                        <input className='form-control' placeholder='service title' name='title'  {...register("title",{ required: true })} />
                        {errors.title && <span className='my-2 text-danger'>This field is required</span>}
                    </div>
                    <div className='my-3 shadow'>
                        <label htmlFor="description">Description</label>
                        <input className='form-control' placeholder='description' name='description' {...register("description", { required: true })} />
                        {errors.description && <span className='my-2 text-danger'>This field is required</span>}
                    </div>
                    <div className='my-3 shadow'>
                        <label htmlFor="price">price</label>
                        <input className='form-control' placeholder='service price' name='price' {...register("price", { required: true })} />
                        {errors.price && <span className='my-2 text-danger'>This field is required</span>}
                    </div>
                    <div className='my-3 shadow'>
                        <label htmlFor="file">UploadFile</label>
                        <input type='file' className='form-control' name='file' onChange={handleFileUpload} />
                        
                    </div>
                    <div className='text-center mb-5'> <button type='submit' className="btn btn-outline-info">Submit</button> </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default AddServiceFrom;