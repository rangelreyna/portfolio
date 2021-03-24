import React, { useState, useEffect } from 'react';
import { listings_home, manage_home, insure_home, fylo_home, huddle_home } from 'assets/images';
// svgs need to be imported as components: https://create-react-app.dev/docs/adding-images-fonts-and-files/
import { Link } from 'react-router-dom';

const previews = {
  listings_home: listings_home,
  manage_home: manage_home,
  insure_home: insure_home,
  fylo_home: fylo_home,
  huddle_home: huddle_home
};

function Home({ projectsData }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, [projectsData]);

  return (
    <div className="home">
      <p>home</p>
      {projects.map(project => (
        <p key={project.id}>
          <Link to={`/project-${project.pathname}`}>{project.title}</Link>
        </p>
      ))}
      <img src={previews["fylo_home"]} alt="fylo-preview"/>
    </div>
  );
}
  
export default Home;