
function SocialTablets({ addClasses }) {
  return (
    <div className={"social-tablets " + addClasses}>
      <a  className="social-tablets__tablet email" href="mailto:rangelreyna2@gmail.com">
        <i className="fas fa-envelope"></i>
        <p>rangelreyna2@gmail.com</p>
      </a>
      <a  className="social-tablets__tablet" href="https://www.linkedin.com/in/reyna-rangel-20ba8aa4/" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin"></i>
        <p>LinkedIn</p>
      </a>
      <a  className="social-tablets__tablet" href="https://github.com/rangelreyna" target="_blank" rel="noreferrer">
        <i className="fab fa-github"></i>
        <p>GitHub</p>
      </a>
  </div>
  );
}
  
export default SocialTablets;