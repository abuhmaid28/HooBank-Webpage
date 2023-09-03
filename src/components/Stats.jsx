import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { stats } from "../constants/Data";
import { useInView } from "react-intersection-observer";
import { fadeVariants } from "./Animation"; // Import your fade-in animation variant

const StatItem = ({ value, title }) => (
  <motion.div
    className="d-flex justify-content-center align-items-center flex-xl-row flex-column my-2"
    initial="initial" // Set initial animation state
    animate="animate" // Set animate animation state
    variants={fadeVariants} // Use the fade-in animation variant
  >
    <h4 className="flex-wrap text-white mb-0 fw-bold display-5 py-lg-0 py-1">
      {value}
    </h4>
    <p className="text-gradient text-uppercase mb-0 mt-3 fs-4 ms-2">{title}</p>
  </motion.div>
);

const Stats = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust the threshold value as needed
  });

  useEffect(() => {
    if (inView) {
      setAnimationTriggered(true);
    }
  }, [inView]);

  useEffect(() => {
    if (animationTriggered) {
      controls.start("animate");
    }
  }, [animationTriggered, controls]);

  return (
    <motion.section
      initial="initial" // Set initial animation state
      animate={controls} // Use framer-motion controls
      variants={fadeVariants} // Use the fade-in animation variant
      className="d-flex stats"
      ref={ref}
    >
      <Container className="d-flex justify-content-around align-items-center my-md-3 flex-column flex-md-row">
        {stats.map((stat, index) => (
          <StatItem key={index} value={stat.value} title={stat.title} />
        ))}
      </Container>
    </motion.section>
  );
};

export default Stats;
