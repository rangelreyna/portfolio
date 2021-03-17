import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Home, About, Contact, Project, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/project" exact component={Project} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
