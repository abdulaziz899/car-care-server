import axios from 'axios';
import { useForm } from "react-hook-form";
import React, { useContext, useState } from 'react';
import ServiceSiteBar from '../../Service/ServiceSiteBar/ServiceSiteBar';
import { UserContext } from '../../../App';

const Review = () => {
    const [imageURL,setImageURL]=useState(null);
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const reviewDetail={
            name:data.name,
            imageURL:imageURL,
            description:data.description
        };
        console.log(data);
        console.log(reviewDetail)
        const url=`http://localhost:4000/addReview`;
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(reviewDetail)
          })
          .then(res=>res.json())
          .then(data=>
           { if(data){
                alert("review add success")
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
            <div className='col-md-9 mt-5'>
                <div className='row mt-3 mb-3'>
                    <div className="col-md-6">
                        <h2 className='text-success'>Add Review</h2>
                    </div>
                    <div className="col-md-6 ml-auto rounded-circle ">
                        <img src={loggedInUser.img} alt=""/>
                    </div>
                </div>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <div className='my-3 shadow'>
                        <label htmlFor="name">Name</label>
                        <input className='form-control' placeholder='enter your name' name='name'  {...register("name",{ required: true })} />
                        {errors.title && <span className='my-2 text-danger'>This field is required</span>}
                    </div>
                    <div className='my-3 shadow'>
                        <label htmlFor="description">Description</label>
                        <input className='form-control' placeholder='description' name='description' {...register("description", { required: true })} />
                        {errors.description && <span className='my-2 text-danger'>This field is required</span>}
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

export default Review;