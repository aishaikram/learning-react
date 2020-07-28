import React from 'react';
//import logo from './logo.svg';
//import './App.css';
// import ServiceBus from './Components/ServiceBus';


import Header from './Components/Header';
import  Footer  from "./Components/Footer";
import  Home from "./Views/Home";
import About from "./Views/About";
import Queue from "./Views/Queue";
import{
  BrowserRouter as Router,
  Switch,
Route
} from "react-router-dom"

function App() {
  return (
    
    <div className="App">
{/*Links should be inside the Router tag, the Switch defines the routing path*/}

<Router>
<Header/>

<div className="p-3">
<Switch>
  <Route exact path="/"> <Home/> </Route>
  <Route path="/about"><About/></Route>
  <Route path="/queue"><Queue/></Route>
</Switch>

</div>

<Footer></Footer>
</Router>

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
       
        <ServiceBus name="Aisha Bus"/>  */}
        
     
    </div>
  );
}

export default App;
