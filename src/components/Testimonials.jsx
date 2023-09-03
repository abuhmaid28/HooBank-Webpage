import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Container } from "react-bootstrap";
import { feedback } from "../constants/Data";
import FeedbackCard from "./FeedbackCard";
import "../custom.css";
import { fadeVariants } from "./Animation";

const Testimonials = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector("#clients"); // Replace with the correct ID for your section
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isInViewport) {
        controls.start("animate");
      } else {
        controls.start("initial");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.section
      id="clients"
      className="position-relative d-flex justify-content-center align-items-center flex-column py-6"
      initial="initial"
      animate={controls}
      variants={fadeVariants}
    >
      <div className="position-absolute w-60 h-60 rounded-circle" />

      <Container className="w-100 d-flex justify-content-between align-items-center flex-md-row flex-column mb-sm-16 mb-6">
        <h2 className="text-white display-5 fw-semibold w-100">
          What People are <br className="d-sm-block d-none" /> saying about us
        </h2>
        <div className="w-100 mt-md-0 mt-6">
          <p className="text-left my-2 text-secondary fs-5 lh-lg w-75 ms-md-5 ms-lg-0">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </Container>

      <Container>
        <div className="row w-100">
          {feedback.map((card) => (
            <div key={card.id} className="col-sm-12 col-md-6 col-lg-4">
              <motion.div
                initial="initial"
                animate={controls}
                variants={fadeVariants}
              >
                <FeedbackCard {...card} />
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default Testimonials;
