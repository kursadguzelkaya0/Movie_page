import React from 'react';
import Footer from '../Footer/Footer';
import AppNavbar from '../Navbar/AppNavbar';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="image-part">
        <AppNavbar />
        <div className="landing-info">
          <span className="landing-info-header">MovieBest</span>
          <span className="landing-info-body">Find Best Movies Easily</span>
          <span className="landing-info-description">To find information about movies please sign up or sign in</span>
          <button className="button sign-in" type="button" onClick={() => console.log('CLicked')}>Sign Up</button>
          <button className="button sign-in" type="button" onClick={() => console.log('CLicked')}>Sign In</button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
