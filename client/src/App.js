import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import store from './store';
import AppNavbar from './components/Navbar/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadUser } from './store/actions/authActions';
import Movies from './components/Movies/Movies';
import Showcase from './components/Showcase/Showcase';
import SideBar from './components/Footer/Footer';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MoviePage from './components/Movies/MoviePage';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }  

  render () {
    const Home = () => (
      <div className="main">
            <Showcase />
            <Container className="main" fluid="xl">
              <Movies />
            </Container>
      </div>)
    
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <AppNavbar />
            <Switch>
              <Route path="/" exact component={ Home } />
              <Route path="/:id" component={ MoviePage } />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
