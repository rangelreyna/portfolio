import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Logo, Socials } from 'components';
import Hamburger from './Hamburger';
import Links from './Links';
import { logo } from 'assets/svgs';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const body = document.body;
    isOpen ? body.classList.add("no-scroll") : body.classList.remove("no-scroll");
  }, [isOpen]);

  const closeHamburgerBtn = () => {
    if (isOpen){
      setIsOpen(false);
    }
  };

  return (
    <motion.header className={"header " + (isOpen ? 'open' : null)} id="top"
      animate={{ opacity: 1, y: "0%" }} initial={{ opacity: 0, y: "-100%" }} transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}>
      <nav className="container">
        <Logo logo={logo} className={"header__logo"} onClick={closeHamburgerBtn} />
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="header__overlay">
          <Links onClick={closeHamburgerBtn} />
          <Socials className={"header__socials"} />
        </div>
      </nav>
    </motion.header>
  );
}
  
export default Header;