import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import SocialTablets from './SocialTablets';
import Form from './Form';
import { FadeInWhenVisible } from 'components';
import { ReactComponent as Diamond } from 'assets/svgs/pattern-diamond.svg';

function Contact({ transition }) {
  const [showDiamond, setShowDiamond] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiamond(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contact">
      <section className="contact__hero-sec">
        <motion.div className="container"
          animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={transition}>
          <div className="contact__left">
            <h4 className="title">Reach me directly</h4>
            <div className="accent-line"></div>
          </div>
          <SocialTablets addClasses={"contact__right"} />
        </motion.div>
        <Diamond className={"diamond " + (showDiamond ? "visible" : null)} />
      </section>

      <section className="contact__form-sec">
        <FadeInWhenVisible>
          <div className="container">
            <div className="contact__left">
              <h4 className="title">Or try this form</h4>
              <div className="accent-line"></div>
            </div>
            <Form addClasses={"contact__right"} />
          </div>
        </FadeInWhenVisible>
      </section>
    </div>
  );
}
  
export default Contact;