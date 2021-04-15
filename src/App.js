import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ScrollToTop, Header, Footer } from './components';
import { Home, About, Contact, Project } from './pages';
import projectsData from './data/projects.json';
import './App.css';

function App() {
  const transition = { // element animation transition 
    delay: 0.3, 
    duration: 0.7, 
    ease: "easeOut"
  };

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home projectsData={projectsData} transition={transition} />
          </Route>
          <Route path="/about" exact>
            <About transition={transition} />
          </Route>
          <Route path="/contact" exact>
            <Contact transition={transition} />
          </Route>
          <Route path="/project-:pathname" exact>
            <Project projectsData={projectsData} transition={transition} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
