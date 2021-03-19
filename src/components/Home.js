import React, { useState, useEffect } from 'react';
import projectsData from '../data/projects.json';
import { Link } from 'react-router-dom';

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="home">
      <p>home</p>
      {projects.map(project => (
        <p key={project.id}>
          <Link to={`/project-${project.pathname}`}>{project.title}</Link>
        </p>
      ))}
    </div>
  );
}
  
export default Home;