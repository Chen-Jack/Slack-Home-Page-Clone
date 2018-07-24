import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import Notification from './components/notification/Notification';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Notification/>
      </div>
    );
  }
}

export default App;
