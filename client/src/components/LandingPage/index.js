import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';

import Login from '../Auth/Login';
import RegisterModal from '../Auth/RegisterModal';
import Footer from '../Footer/Footer';
import AppNavbar from '../Navbar/AppNavbar';
import './LandingPage.css';
import { redirectToHome } from '../../store/actions/authActions';
import { updateHistory } from '../../store/actions/movieActions';

const LandingPage = () => {
  const history  = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateHistory(history));
  }, [updateHistory, history]);
  
  
  return (
    <div className="landing-page">
      <div className="image-part">
        <div className="landing-info">
          <span className="landing-info-header">MovieBest</span>
          <span className="landing-info-body">Find Best Movies Easily</span>
          <span className="landing-info-description">To find information about movies please sign up or sign in</span>
          <button className="button sign-in" type="button" onClick={() => redirectToHome(history)}><Login history={history}  /></button>
          <button className="button sign-in" type="button" onClick={() => console.log('CLicked')}><RegisterModal /></button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default connect(null, { redirectToHome, updateHistory })(LandingPage);
