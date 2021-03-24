import { Link } from 'react-router-dom';

function Logo({ logo, className, onClick }) {
  return (
    <Link className={className} to="/" onClick={onClick}>
      <img src={logo} alt="logo"/>
    </Link>
  );
}
  
export default Logo;