import axios from 'axios';
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import ServiceSiteBar from '../../Service/ServiceSiteBar/ServiceSiteBar';


const OurStaffFrom = () => {
    const [imageURL,setImageURL]=useState(null);
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        const manageStaff={
            title:data.title,
            imageURL:imageURL,
            name:data.name,
            email:data.email
        };
        console.log(data);
        console.log(manageStaff)
        const url=`http://localhost:4000/addStaff`;
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(manageStaff)
          })
          .then(res=>res.json())
          .then(data=>console.log(data))
        
    };


    const handleFileUpload=event=>{
        const imagesData=new FormData();
        imagesData.set('key','d1c42dbbe7de53c38a28517ac8ce0816');
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
                        <h2 className='text-success'>Our Staff</h2>
                    </div>
                    <div className="col-md-6 ">
                        <h2 className='text-right'>aziz</h2>
                    </div>
                </div>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className='my-3 shadow'>
                        <label htmlFor="name">Name</label>
                        <input className='form-control' placeholder='our staff name' name='name'  {...register("name",{ required: true })} />
                        {errors.name && <span className='my-2 text-danger'>This field is required</span>}
                    </div>
                    <div className='my-3 shadow'>
                        <label htmlFor="title">Job Title</label>
                        <input className='form-control' placeholder='job title' name='title' {...register("title", { required: true })} />
                        {errors.title && <span className='my-2 text-danger'>This field is required</span>}
                    </div>
                    <div className='my-3 shadow'>
                        <label htmlFor="email">Email</label>
                        <input className='form-control' placeholder='email' name='email' {...register("email", { required: true })} />
                        {errors.email && <span className='my-2 text-danger'>This field is required</span>}
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

export default OurStaffFrom;