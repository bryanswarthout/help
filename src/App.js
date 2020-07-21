import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      
    <div className="App">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={ContactMe} />
            <Route exact path="/portfolio" component={Portfolio} />
    </div>
    </Router>
  );
}

export default App;
;