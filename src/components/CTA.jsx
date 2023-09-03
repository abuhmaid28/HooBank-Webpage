import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Container } from "react-bootstrap";
import Button from "./Button";
import { fadeVariants } from "./Animation";

const CTA = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".cta-section"); // Replace with a class name for your section
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
    <Container>
      <motion.section
        className="d-flex justify-content-center align-items-center bg-black-gradient-2 rounded-4 flex-column flex-md-row box-shadow my-6 my-sm-8 py-4 px-5 text-center text-sm-start py-sm-12 px-sm-16 cta-section"
        initial="initial"
        animate={controls}
        variants={fadeVariants}
      >
        <div className="flex-1 d-flex flex-column">
          <h2 className="text-white display-5 fw-semibold w-100 py-2">
            Let’s try our service now!
          </h2>
          <p className="fw-normal text-secondary lh-lg mx-450">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>

        <div className="d-flex justify-content-center align-items-center ms-0 mt-sm-0">
          <Button />
        </div>
      </motion.section>
    </Container>
  );
};

export default CTA;
