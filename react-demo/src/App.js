import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          im Root
          <Home/>
        </header>
      </div>
    );
  }
}

export default App;
