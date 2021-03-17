import { Link, withRouter } from 'react-router-dom';

function Header({ location }) {
  return (
    <div className="header">
      <nav>
        <ul>
          <li className={`${location.pathname === "/" ? "active" : ""}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`${location.pathname === "/about" ? "active" : ""}`}>
            <Link to="/About">About</Link>
          </li>
          <li className={`${location.pathname === "/contact" ? "active" : ""}`}>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
  
export default withRouter(Header);