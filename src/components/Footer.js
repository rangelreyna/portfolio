import { Link } from 'react-router-dom';
import { Logo, Socials, Button } from 'components';
import { logo_footer } from 'assets/svgs';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Logo logo={logo_footer} className={"footer__logo"} />
        <div className="footer__links-wrapper">
          <Socials className={"footer__socials"} />
          <Link to="/contact">
            <Button className={"footer__contact-btn"} content={"Contact"}/>
          </Link>
        </div>
      </div>
    </footer>
  );
}
  
export default Footer;