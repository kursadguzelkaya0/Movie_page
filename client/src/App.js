import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import './App.css';
import store from './store';
// import AppNavbar from './components/Navbar/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadUser } from './store/actions/authActions';
import Movies from './components/Movies/Movies';
// import Footer from './components/Footer/Footer';
import MoviePage from './components/Movies/MoviePage';
import LandingPage from './components/LandingPage';
import AppNavbar from './components/Navbar/AppNavbar';

const App = () => {
  
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const Home = () => (
    <div className="main">
      <Movies />
    </div>)
  
  return (
    <Provider store={ store }>
      <Router>
        <div className="App">
          <AppNavbar />
          <Routes>
            <Route path="/home" exact element={ <Home /> } />
            <Route path="/:id" element={ <MoviePage />} />
            <Route path="/" element={ <LandingPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
