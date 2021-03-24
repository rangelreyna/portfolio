import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, About, Contact, Project } from './pages';
import projectsData from './data/projects.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact><Home projectsData={projectsData} /></Route>
          <Route path="/about" exact><About /></Route>
          <Route path="/contact" exact><Contact /></Route>
          <Route path="/project-:pathname" exact><Project projectsData={projectsData} /></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
