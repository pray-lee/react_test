import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Home from './components/Home';
import Demo from './components/SetGetState';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} alt="logo" className="App-logo"></img>
          im Root
          <Home/>
          <Demo/>
        </header>
      </div>
    )
  }
}

export default App;
