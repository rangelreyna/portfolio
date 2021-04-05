import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listings_home, manage_home, insure_home, fylo_home, huddle_home } from 'assets/images';  
import { ReactComponent as ArrowRight } from 'assets/svgs/icon-arrow-right.svg';

// used to call preview imgs dynamically by name, still need to add 'portfolio' 
const previews = {
  listings_home: listings_home,
  manage_home: manage_home,
  insure_home: insure_home,
  fylo_home: fylo_home,
  huddle_home: huddle_home
};

function Projects({ projectsData }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, [projectsData]);

  return (
    <div className="projects-container">
      {projects.map(project => (
        <div key={project.id} className="project">
          <Link to={`/project-${project.pathname}`}>
            <img className="project__preview" src={previews[project.homePreview]} alt={project.title}/>
          </Link>
          <Link to={`/project-${project.pathname}`}>
            <h5 className="project__title">{project.title}</h5>
          </Link>
          <p className="project__techs">{project.technologies}</p>
          <p className="project__intro">{project.intro}</p>
          <Link to={`/project-${project.pathname}`}>
            <div className="more-link">
              <p>View more</p>
              <ArrowRight className="arrow-right" />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
  
export default Projects;