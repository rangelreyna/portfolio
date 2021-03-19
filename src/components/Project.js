import React, { useState, useEffect } from 'react';
import projectsData from '../data/projects.json';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

function Project({ match }) {
  const [project, setProject] = useState({
    technologies: [],
    slidePreviews: [],
    detailText: []
  });

  useEffect(() => {
    setProject(projectsData.find(project => project.pathname === match.params.pathname));
  }, []);

  return (
    <div className="project">
      <h1>{project.title}</h1>
      <p>{project.intro}</p>
      {project.detailText.map((paragraph, index) => (
        <p key={index}>
          {ReactHtmlParser(paragraph) /* parsing to enable html <strong> tags */} 
        </p>
      ))}
    </div>
  );
}
  
export default Project;