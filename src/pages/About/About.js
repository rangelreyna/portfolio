import { Link } from 'react-router-dom';
import DetailBox from './DetailBox';
import { Button } from 'components';
import resume from 'documents/resume.pdf';
import { me } from 'assets/images';

function About() {
  return (
    <div className="about">
      <section className="about__hero-sec">
        <div className="container">
          <div className="about__hero-sec__left">
            <h2>About Me</h2>
            <p>Hi, my name is Reyna and I'm a Computer Science graduate who likes building pretty things.</p>
            <a href={resume} target="_blank" rel="noreferrer">
              <Button className="resume-btn" content="Download resume" />
            </a>
          </div>
          <div className="about__hero-sec__right">
            <div className="me-wrapper">
              <img className="me" src={me} alt="me"/>  
            </div> 
          </div>
        </div>
      </section>

      <section className="about__detail-sec">
        <DetailBox addClasses={"container"} title={"Where I started"} text={
          `I became interested in Front-end development after coming across an opportunity where I had to build a simple website while having no experience. 
          All I had worked on through my CS education was back-end projects, so it didn't go well, but this project sparked an interest in me. 
          I realized I really enjoy seeing a project physically come together, and so I decided to teach myself Front-end web development.`
        } />
        <DetailBox addClasses={"container"} title={"Where I'm at"} text={
          `I have established a solid foundation working with HTML and CSS (including Sass preprocessing) and am able to build various responsive layouts with confidence. 
          I’m comfortable using JavaScript to manipulate the DOM and add interactivity to web pages. 
          I also have some experience working with React (using State and Effect hooks) to dynamically render components.`
        } />
        <DetailBox addClasses={"container"} title={"What's next"} text={
          `For future projects, I’m excited to try out some complex CSS challenges, incorporate more animations into my projects, and gain more experience using React – maybe even try Gatsby.`
        } />
      </section>

      <section className="about__cta-sec">
        <div className="container">
          <p>I’m currently looking for an opportunity to expand my skillset as a Front-end developer in a professional setting.</p>
          <div className="accent-line"></div>
          <h4>If you haven't yet</h4>
          <p>I'd love for you to 
            <Link className="link" to="/"> check out my work </Link> and 
            <Link className="link" to="/contact"> contact me </Link> 
            if interested in working together.</p>
        </div>
      </section>
    </div>
  );
}
  
export default About;