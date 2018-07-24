import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import Notification from './components/notification/Notification';
import Landing from './components/landing/Landing';
import CompanyInfo from './components/company_info/CompanyInfo';
import EmailSignUp from './components/email_signup/EmailSignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Notification/>
        <Landing/>
        <CompanyInfo/>
        <EmailSignUp/>
      </div>
    );
  }
}

export default App;
