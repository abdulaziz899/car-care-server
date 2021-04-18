import React from 'react';
import { useForm } from 'react-hook-form';
import ServiceSiteBar from '../../Service/ServiceSiteBar/ServiceSiteBar';

const MakeAdmin = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        const createAdmin={
            name:data.name,
            email:data.email,
        };
        console.log(data);
        console.log(createAdmin)
        const url=`http://localhost:4000/addStaff`;
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(createAdmin)
          })
          .then(res=>res.json())
          .then(data=>{
              if (data) {
                  alert('admin access success fully')
              }
          })
    };
    return (
        <div className=''>
            <div className="row">
                <div className="col-md-3">
                    <ServiceSiteBar></ServiceSiteBar>
                </div>
                <div className="col-md-9 pt-5">
                    <h2 className='text-center py-5 text-secondary'>Add New Admin </h2>
                    <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className='my-3 shadow'>
                        <label htmlFor="name">Name</label>
                        <input className='form-control' placeholder=' name' name='name'  {...register("name",{ required: true })} />
                        {errors.name && <span className='my-2 text-danger'>This field is required</span>}
                    </div>
                        <div className='my-3 shadow'>
                                <label htmlFor="email">Email</label>
                                <input className='form-control' placeholder='email' name='email'  {...register("email",{ required: true })} />
                                {errors.email && <span className='my-2 text-danger'>This field is required </span>}
                        </div>
                        <div className='text-center mb-5'>
                            <button type='submit' className="btn btn-outline-danger">Access Admin</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;