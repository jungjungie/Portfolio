import React from 'react';
import Header from './components/Header/Header';
import NavLinks from './components/NavLinks/NavLinks';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header>
        <NavLinks>
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </NavLinks>
      </Header>
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
