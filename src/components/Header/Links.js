import { Link, withRouter } from 'react-router-dom';

function Links({ location, onClick }) {
    return (
      <ul className="header__links-wrapper">
        <li className={`${location.pathname === "/" ? "active" : ""}`}>
          <Link className="header__link" to="/" onClick={onClick}>Home</Link>
        </li>
        <li className={`${location.pathname.toLowerCase() === "/about" ? "active" : ""}`}>
          <Link className="header__link" to="/about" onClick={onClick}>About</Link>
        </li>
        <li className={`${location.pathname.toLowerCase() === "/contact" ? "active" : ""}`}>
          <Link className="header__link" to="/contact" onClick={onClick}>Contact</Link>
        </li>
      </ul>
    );
  }
    
  export default withRouter(Links);