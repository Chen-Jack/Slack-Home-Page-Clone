import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import Notification from './components/notification/Notification';
import Landing from './components/landing/Landing';
import CompanyInfo from './components/company_info/CompanyInfo';
import EmailSignUp from './components/email_signup/EmailSignUp';
import Footer from './components/footer/Footer';
import MetaTag from 'react-meta-tags';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MetaTag>
          <title> Where work happens | Slack </title>
          <meta property="viewport" content="width=device-width, initial-scale=1"/>
        </MetaTag>
        <NavBar/>
        <Notification/>
        <Landing/>
        <CompanyInfo/>
        <EmailSignUp/>
        <Footer/>
      </div>
    );
  }
}

export default App;
