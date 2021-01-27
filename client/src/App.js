import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadUser } from './store/actions/authActions';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render () {
    return (
      <Provider store={ store }>
        <div className="App">
          <AppNavbar />
        </div>
      </Provider>
    )
  }
}

export default App
