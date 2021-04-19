import React from 'react';
import HomePageService from '../HomePageService/HomePageService';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import NavBar from '../NavBar/NavBar';
import './Home.css';
import OurStaff from '../OurStaff/OurStaff';
import HomePageReview from '../HomePageReview/HomePageReview';
import Footer from '../../Footer/Footer/Footer';
import SuccessFullWork from '../SuccessFullWork/SuccessFullWork';
const Home = () => {
    return (
        <div  >
           <div className="homeContainer">
             <NavBar></NavBar>
             <HeaderInfo></HeaderInfo>
           </div>
           <HomePageService></HomePageService>
           <SuccessFullWork></SuccessFullWork>
           <OurStaff></OurStaff>
           <HomePageReview></HomePageReview>
           <Footer></Footer>
        </div>
    );
};

export default Home;