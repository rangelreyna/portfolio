import { Link } from 'react-router-dom';
import { icon_chevron_left_m, icon_chevron_right_m } from 'assets/svgs';

function ProjectNav({ prevProject, nextProject }) {
  return (
    <div className="project-nav">
      <Link className="project-nav__prev-proj-btn" to={`/project-${prevProject.path}`}>
        <img className="left-chevron" src={icon_chevron_left_m} alt="icon-chevron-left"/>
        <div>
          <h6>{prevProject.title}</h6>
          <p>Previous Project</p>
        </div>
      </Link>
      <Link className="project-nav__next-proj-btn" to={`/project-${nextProject.path}`}>
        <img className="right-chevron" src={icon_chevron_right_m} alt="icon-chevron-right"/>
        <div>
          <h6>{nextProject.title}</h6>
          <p>Next Project</p>
        </div>
      </Link>
    </div>
  );
}
  
export default ProjectNav;