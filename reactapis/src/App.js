import React from 'react';
import logo from './logo.svg';
import './App.css';
import Apidata from './components/Apidata';


function App() {

  //fetch('http://10.115.193.252:8888/apinode')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactt
        </a>
      </header>

    </div>
  );
}

export default App;
