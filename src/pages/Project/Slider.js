import React, { useState, useEffect } from 'react';
import { icon_chevron_left_l, icon_chevron_right_l } from 'assets/svgs';

function Slider({ slidePreviews }) {
  const [index, setIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [canClickLeft, setCanClickLeft] = useState(false);
  const [canClickRight, setCanClickRight] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchMoved, setTouchMoved] = useState(false);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    setIndex(0); // restart slider for new project page
  }, [slidePreviews]);
  
  useEffect(() => {
    // anytime index changes -> set translate & availability of buttons 
    if(index === 0){
      setCanClickLeft(false);
      setCanClickRight(true);
    } else if(index === slidePreviews.length - 1){
      setCanClickLeft(true);
      setCanClickRight(false)
    } else{
      setCanClickLeft(true);
      setCanClickRight(true);
    }

    setTranslate(index * 100);
  }, [index, slidePreviews.length]);

  const handleLeft = ()  => {
    if(index !== 0){
      setIndex(prev => prev - 1);
    }
  };

  const handleRight = ()  => {
    if(index !== slidePreviews.length - 1){
      setIndex(prev => prev + 1);
    }
  };

  const handleTouchStart = (e)  => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e)  => {
    if (!touchMoved){
      setTouchMoved(true);
    }
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = ()  => {
    if (touchMoved){
      if (touchStart - touchEnd < -75){
        handleLeft();
      }
      if (touchStart - touchEnd > 75){
        handleRight();
      }
      setTouchMoved(false);
    }
  };

  return (
    <div className="slider" onTouchStart={e => handleTouchStart(e)} onTouchMove={e => handleTouchMove(e)} onTouchEnd={handleTouchEnd}>
      <div className="slider__container" style={{transform: `translateX(-${translate}%)`}}>
        {slidePreviews.map((preview, index) => (
          <img className="slider__slide" key={index} src={process.env.PUBLIC_URL + preview} alt={preview}/>
        ))}
      </div>
      <div className={"slider__left-btn " + (canClickLeft ? "available" : null)} onClick={handleLeft}>
        <img src={icon_chevron_left_l} alt="icon-chevron-left"/>
      </div>
      <div className={"slider__right-btn " + (canClickRight ? "available" : null)} onClick={handleRight}>
        <img src={icon_chevron_right_l} alt="icon-chevron-right"/>
      </div>
    </div>
  );
}
  
export default Slider;