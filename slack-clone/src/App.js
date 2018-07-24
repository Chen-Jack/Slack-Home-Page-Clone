import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import Notification from './components/notification/Notification';
import Landing from './components/landing/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Notification/>
        <Landing/>
      </div>
    );
  }
}

export default App;
