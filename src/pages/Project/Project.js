import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import Slider from './Slider';
import DetailsHeader from './DetailsHeader';
import DetailsBody from './DetailsBody';
import ProjectNav from './ProjectNav';
import { Button, FadeInWhenVisible } from 'components';

function Project({ projectsData, transition }) {
  const { pathname } = useParams();
  const [project, setProject] = useState({
    slidePreviews: [],
    detailText: [], 
    prevProject: {},
    nextProject: {}
  });

  useEffect(() => {
    const targetProject = projectsData.find(project => project.pathname === pathname);
    setProject(targetProject);
  }, [projectsData, pathname]);

  return (
    <div className="project">
      <section className="project__hero-sec">
        <motion.div className="container"
          animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={transition}>
          <h3 className="title">{project.title}</h3>
          <p className="brief">{project.intro}</p>
          <a href={project.live} target="_blank" rel="noreferrer">
            <Button className={"see-live-btn"} content={
              <><i className="fas fa-link"></i>
              <p>See it live</p></>
            } />
          </a>
        </motion.div>
      </section>

      <section className="project__detail-sec">
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={transition}>
          {project.slidePreviews.length !== 0 && <Slider slidePreviews={project.slidePreviews} />}
        </motion.div>
        <div className="info-wrapper container">
          <FadeInWhenVisible>
            <DetailsHeader technologies={project.technologies} date={project.date} github={project.github} />
            <DetailsBody detailText={project.detailText} hasFMCredit={project.hasFMCredit} FMChallenge={project.FMChallenge} />
            <ProjectNav prevProject={project.prevProject} nextProject={project.nextProject} />
          </FadeInWhenVisible>
        </div>
      </section>

      <section className="project__cta-sec">
        <FadeInWhenVisible>
          <div className="container">
            <h4>Have a question or want to work together?</h4>
            <p>Feel free to contact me</p>
            <Link to="/contact">
              <Button className={"contact-btn"} content={"Contact me"} />
            </Link>
          </div>
        </FadeInWhenVisible>
      </section>
    </div>
  );
}
  
export default Project;