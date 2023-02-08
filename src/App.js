import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Events from "./components/Pages/Events";
import Prayer from "./components/Pages/Prayer";
import Minestry from "./components/Pages/Minestry";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
          <Route path="/" exact component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/prayer" component={Prayer} />
          <Route path="/minestry" component={Minestry} />
          <Route path="/about-us" component={About} />
          <Route path="/contact-us" component={Contact} />
        
      </Router>
    </>
  );
}

export default App;
