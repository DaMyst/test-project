import React, { Component } from 'react';
//components
import Pages from './components/pages/pages';





import {
  Redirect
} from 'react-router-dom';

//includes
import './assets/css/default.min.css'



class App extends Component {
  state = {
    contacts: []
  }

  render() {
    const userData = localStorage.getItem('userData');
    console.log(userData);

    return (
      <div className="App">

        {userData === null ? <Redirect to='/home' /> : <Redirect to='/dashboard' />}
        <Pages></Pages>


      </div>


    );
  }

}


export default App;
