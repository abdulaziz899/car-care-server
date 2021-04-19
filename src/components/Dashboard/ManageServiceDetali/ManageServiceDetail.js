import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ManageServiceDetail = (props) => {
    const {title,imageURL,description,_id}=props.manageService;
    const deleteService=id=>{
        console.log(id)
        console.log("click me")
        fetch(`https://dry-lowlands-26216.herokuapp.com/delete/${id}`,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>console.log('delete success'))
    
}
    return (
        <tr>
            <tr>{props.index+1}</tr>
            <td className='w-25'>{title}</td>
            <td  className='w-25'>{description}</td>
            <td><img className='w-25' src={imageURL} alt=""/></td>
            <button onClick={()=>deleteService(_id)} className="btn btn-outline-danger"> <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> </button>
        </tr>
    );
};

export default ManageServiceDetail;