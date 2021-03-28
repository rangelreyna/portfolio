import SocialTablets from './SocialTablets';
import Form from './Form';
import { ReactComponent as Diamond } from 'assets/svgs/pattern-diamond.svg';

function Contact() {
  return (
    <div className="contact">
      <section className="contact__hero-sec">
        <div className="container">
          <div className="contact__left">
            <h4 className="title">Reach me directly</h4>
            <div className="accent-line"></div>
          </div>
          <SocialTablets addClasses={"contact__right"} />
        </div>
        <Diamond className="diamond" />
      </section>

      <section className="contact__form-sec">
        <div className="container">
          <div className="contact__left">
            <h4 className="title">Or try this form</h4>
            <div className="accent-line"></div>
          </div>
          <Form addClasses={"contact__right"} />
        </div>
      </section>
    </div>
  );
}
  
export default Contact;