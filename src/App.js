import React from 'react';
//import logo from './logo.svg';
//import './App.css';
// import ServiceBus from './Components/ServiceBus';
// import Hello from './Components/Hello'
import CounterExample from './Components/CounterExample';
import Header from './Components/Header';
import  Footer  from "./Components/Footer";

function App() {
  return (
    
    <div className="App">
<Header/>
<CounterExample />
<Footer></Footer>
       {/* <header className="App-header">
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
          Learn React
        </a>
        <p>Aisha Ikram</p>
        <Hello name="AishaIkram"/>
        <ServiceBus name="Aisha Bus"/>  */}
        
     
    </div>
  );
}

export default App;
