import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Link as ScrollLink, Element } from 'react-scroll';
import Logo from './Logo';
import Projects from './Projects';
import { Button, FadeInWhenVisible } from 'components';
import { icon_location, icon_arrow_right, logo_html, logo_css, logo_js, logo_sass, logo_react } from 'assets/svgs';
import { ReactComponent as Diamond } from 'assets/svgs/pattern-diamond.svg';

function Home({ projectsData, transition }) {
  const [showDiamonds, setShowDiamonds] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiamonds(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <section className="home__hero-sec">
        <motion.div className="container"
          animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={transition}>
          <h1 className="title">Hi, I'm Reyna</h1>
          <p className="brief">A Front-end web developer focused on building beautiful and responsive websites.</p>
          <div className="location">
            <img src={icon_location} alt="icon-location"/>
            <p>Far North Dallas, TX</p>
          </div>
          <ScrollLink to="work" smooth={true} duration={500}>
            <Button className={"see-work-btn"} content={
              <><p>See my work</p>
              <img src={icon_arrow_right} alt="icon-arrow-right"/></>
            } />
          </ScrollLink>
        </motion.div>
        <Diamond className={"diamond-left " + (showDiamonds ? "visible" : null)} />
        <Diamond className={"diamond-right " + (showDiamonds ? "visible" : null)} />
      </section>

      <Element name="work">
        <section className="home__skills-sec">
          <FadeInWhenVisible>
            <div className="container">
              <h3 className="section-title">Technical Skills</h3>
              <div className="accent-line"></div>
              <div className="logos-wrapper">
                <Logo logo={logo_html} title={"HTML5"} />
                <Logo logo={logo_css} title={"CSS3"} />
                <Logo logo={logo_js} title={"JavaScript"} />
                <Logo logo={logo_sass} title={"Sass"} />
                <Logo logo={logo_react} title={"React"} />
              </div>
            </div>
          </FadeInWhenVisible>
        </section>
      </Element>

      <section className="home__projects-sec">
        <div className="container">
          <FadeInWhenVisible>
            <h3 className="section-title">Portfolio</h3>
            <div className="accent-line"></div>
          </FadeInWhenVisible>
          <Projects projectsData={projectsData} />
        </div>
      </section>

      <section className="home__cta-sec">
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
  
export default Home;