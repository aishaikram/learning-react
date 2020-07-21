import React from 'react';
import logo from './logo.svg';
import './App.css';
// import ServiceBus from './Components/ServiceBus';
// import Hello from './Components/Hello'
import CounterExample from './Components/CounterExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {/*  
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Aisha Ikram</p>
        <Hello name="AishaIkram"/>
        <ServiceBus name="Aisha Bus"/>  */}
        <CounterExample />
      </header>
    </div>
  );
}

export default App;
