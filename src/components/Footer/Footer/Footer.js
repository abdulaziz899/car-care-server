import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
   
    return (
        <footer className="bg-secondary mt-5">
            <div className="container pt-5">
                <div className="row">
                    <div class="col-sm-6 col-md-4 item">
                            <h3 className='ml-4'>Services</h3>
                            <ul className='list-unstyled'>
                                <li><a className=' text-white' href="#">7 Days Service Warranty</a></li>
                                <li><a className=' text-white' href="#">On Time Work Completion</a></li>
                                <li><a className=' text-white' href="#">Skilled and Reliable Vehicle Mechanics with Spare Parts.</a></li>
                            </ul>
                        </div>
                    
                    <div className="col-sm-6 col-md-4 item companyContainer">
                        <h3 className='ml-4'>About</h3>
                            <ul className='companyContainer'>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                    </div>

                    <div className='social col-sm-6 col-md-4'>
                        <h2 className='mb-5'>Flowing Social media</h2>
                        <a href="https://web.facebook.com/"  target='_blank'> <FontAwesomeIcon className='icons' icon={faFacebookF}></FontAwesomeIcon> </a>
                        <a href="https://www.google.com/" target='_blank'> <FontAwesomeIcon className='icons' icon={faGooglePlusG}></FontAwesomeIcon> </a>
                        <a href="https://www.instagram.com/"  target='_blank'> <FontAwesomeIcon className='icons' icon={faInstagram}></FontAwesomeIcon> </a>
                        <a href="https://www.instagram.com/"  target='_blank'> <FontAwesomeIcon className='icons' icon={faTwitter}></FontAwesomeIcon> </a>
                    </div>
                    </div>
                </div>
                <div className="copyRight text-center text-white">
                    <p>Copyright@ {(new Date()).getFullYear()} ABDUL AZIZ</p>
                </div>
           
        </footer>
        
    );
};

export default Footer;