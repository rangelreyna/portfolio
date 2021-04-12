import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { icon_chevron_up } from 'assets/svgs';

function ScrollToTop() {
  const { pathname } = useLocation();
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => { 
    window.addEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => { 
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleScroll = () => {
    if (window.pageYOffset > (window.innerHeight * 0.5)){
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({duration: 500}); // smooth scroll 
  };

  return (
    <div className={"quick-up-btn " + (showBtn ? "visible" : null)} onClick={scrollToTop}>
      <img src={icon_chevron_up} alt="icon-chevron-up"/>
    </div>
  );
}

export default ScrollToTop;