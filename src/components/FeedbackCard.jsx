import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { quotes } from "../assets/Assets";
import { fadeVariants } from "./Animation";

const FeedbackCard = ({ content, name, title, img }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".feedback-card"); // Replace with a class name for your card
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
    <motion.div
      className="rounded-4 d-flex justify-content-between flex-column me-sm-5 p-4 my-4 feedback-card"
      initial="initial"
      animate={controls}
      variants={fadeVariants}
    >
      <img
        src={quotes}
        alt="double_quotes"
        className="w-42 h-27 object-fit-contain"
      />
      <p className="font-poppins fw-normal fs-6 lh-lg text-white my-5">
        {content}
      </p>

      <div className="d-flex">
        <img src={img} alt={name} className="w-68 h-68 rounded-circle" />
        <div className="d-flex flex-column ms-4">
          <h4 className="font-poppins fw-semibold h5 lh-base text-white">
            {name}
          </h4>
          <p className="font-poppins fw-normal h6 lh-1 w-100 text-secondary">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackCard;
