import React from 'react';
import Blogs from '../Blogs/Blogs';
import Footer from '../../Shared/Footer/Footer'
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeatureService from '../FeatureService/FeatureService';
import Header from '../Header/Header';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
  return (
    <div>
      <Header/>
      <Services/>
      <FeatureService/>
      <br />
      <br />
      <br />
      <MakeAppoinment/>
      <Testimonials/>
      <Blogs/>
      <Doctors/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;