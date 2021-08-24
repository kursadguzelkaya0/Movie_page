import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import store from './store';
import AppNavbar from './components/Navbar/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadUser } from './store/actions/authActions';
import Movies from './components/Movies/Movies';
import Footer from './components/Footer/Footer';
import MoviePage from './components/Movies/MoviePage';
import LandingPage from './components/LandingPage';

const App = () => {
  
  useEffect(() => {
    store.dispatch(loadUser());
  }, [loadUser]);

  const Home = () => (
    <div className="main">
      <Movies />
    </div>)
  
  return (
    <Provider store={ store }>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/home" exact component={ Home } />
            <Route path="/:id" component={ MoviePage } />
            <Route path="/" component={ LandingPage } />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
