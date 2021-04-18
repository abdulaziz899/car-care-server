import React from 'react';
import './HeaderInfo.css';
import CarRepair from '../../../img/carRepair.jpg'

const HeaderInfo = () => {
    return (
        <div className='container'>
            <div className="row d-flex justify-content-between ">
                <div className="col-md-6 col-sm-12 mb-5">
                    <div>
                        <h1 className='text-white'>Now</h1>
                        <h2>It’s Easy For You Care A Car</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero.</p>
                        <button className="btn btn-outline-info">Get Estimate</button>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 imgControl">
                    <img className='img-fluid ' src={CarRepair} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default HeaderInfo;