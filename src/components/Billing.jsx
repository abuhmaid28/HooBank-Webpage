import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { apple, bill, google } from "../assets/Assets";
import { Container, Row, Col } from "react-bootstrap";
import { fadeVariants } from "./Animation";

const Billing = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("product");
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
      initial="initial"
      animate={controls}
      variants={fadeVariants}
      id="product"
      className="my-lg-5 py-5"
    >
      <Container className="text-md-start text-center">
        <Row className="align-items-center flex-column-reverse flex-md-row">
          <Col xs={12} md={6}>
            <img
              src={bill}
              alt="billing"
              className="w-100 h-100 position-relative z-3"
            />

            {/* gradient start */}
            <div className="position-absolute z-2 left-n50 top-0 w-50 h-50 rounded-circle white__gradient" />
            <div className="position-absolute z-0 w-50 h-50 left-n50 bottom-0 rounded-circle pink__gradient" />
            {/* gradient end */}
          </Col>

          <Col xs={12} md={6} className="flex-grow-1 p-3 mt-4">
            <div>
              <h2 className=" text-white display-4 fw-bold lh-base">
                Easily control your billing & invoicing
              </h2>
              <p className="my-5 text-secondary fs-5 w-100 w-md-75">
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                integer platea placerat.
              </p>

              <div className="d-flex flex-wrap mt-4 justify-content-center">
                <img
                  src={apple}
                  alt="apple_app_store"
                  className="me-4 cursor-pointer"
                />
                <img
                  src={google}
                  alt="google_play_store"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default Billing;
