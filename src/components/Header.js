import { Link, withRouter } from 'react-router-dom';

function Header({ location }) {
  return (
    <div className="header">
      <nav>
        <ul>
          <li className={`${location.pathname === "/" ? "active" : ""}`}>
            <Link className="header__link" to="/">Home</Link>
          </li>
          <li className={`${location.pathname.toLowerCase() === "/about" ? "active" : ""}`}>
            <Link className="header__link" to="/about">About</Link>
          </li>
          <li className={`${location.pathname.toLowerCase() === "/contact" ? "active" : ""}`}>
            <Link className="header__link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
  
export default withRouter(Header);