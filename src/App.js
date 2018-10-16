import React, { Component } from 'react';
import logo from './logo.svg';
import storage from './storage.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={storage} className="App-logo" alt="logo" />
          <p>
           React POC Cloud Storage | v.3
          </p>
          <a
            className="App-link"
            href="https://medium.com/google-cloud/how-to-deploy-a-static-react-site-to-google-cloud-platform-55ff0bd0f509"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn deploy a static React 
          </a>
          <a
            className="App-link"
            href="https://www.verypossible.com/blog/how-to-deploy-a-single-page-application-to-google-cloud"
            target="_blank"
            rel="noopener noreferrer"
          >
          Create Scripting Deployments
          </a>
        </header>
      </div>
    );
  }
}

export default App;
