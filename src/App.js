import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Weather from "./components/Weather";
import About from "./components/About";
import Footer from "./components/Footer";

import { CityProvider } from "./context/CityContext";

function App() {
  return (
    <Router>
      <CityProvider>
        <div className="App">
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/weather" component={Weather}/>
          <Route exact path="/about" component={About}/>
          <Footer/>
        </div>
      </CityProvider>
    </Router>
  );
}

export default App;
