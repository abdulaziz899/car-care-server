import React, { useEffect, useState } from 'react';
import HomePageReviewDetail from '../HomePageReviewDetail/HomePageReviewDetail';


const HomePageReview = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        const url=`http://localhost:4000/allReview`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setReviews(data);
        })
    },[])
    return (
        <div className='container'>
            <h1 className='text-capitalize text-center text-success my-5'> Reviews</h1>
            <div className='row'>
                {
                    reviews.map(review=><HomePageReviewDetail review={review}
                    key={review._id}></HomePageReviewDetail>)
                }
            </div>
        </div>
    );
};

export default HomePageReview;