import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Container } from "react-bootstrap";
import { clients } from "../constants/Data";
import { fadeVariants } from "./Animation";

const Clients = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".clients-section"); // Replace with a class name for your section
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
    <section className="my-4 clients-section">
      <Container>
        <motion.div
          className="row mx-auto"
          initial="initial"
          animate={controls}
          variants={fadeVariants}
        >
          {clients.map((client) => (
            <div key={client.id} className="col-6 col-sm-3 p-5">
              <img
                src={client.logo}
                alt="client_logo"
                className="logo object-fit-contain sm-w"
              />
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Clients;
