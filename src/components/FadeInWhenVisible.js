import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, y: "0px" },
        hidden: { opacity: 0, y: "20px" }
      }}
    >
      {children}
    </motion.div>
  );
}
  
export default FadeInWhenVisible;