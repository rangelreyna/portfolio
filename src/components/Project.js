import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link, useParams } from 'react-router-dom';

function Project({ projectsData }) {
  const { pathname } = useParams();

  const [project, setProject] = useState({
    technologies: [],
    slidePreviews: [],
    detailText: []
  });

  useEffect(() => {
    const targetProject = projectsData.find(project => project.pathname === pathname);
    setProject(targetProject);
  }, [projectsData, pathname]);

  return (
    <div className="project">
      <h1>{project.title}</h1>
      <p>{project.intro}</p>
      {project.detailText.map((paragraph, index) => (
        <p key={index}>
          {ReactHtmlParser(paragraph) /* parsing to enable html <strong> tags */} 
        </p>
      ))}
      <img src={process.env.PUBLIC_URL + "/slider-previews/fylo-desktop.png"} alt={project.title}/>
    </div>
  );
}
  
export default Project;