import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { discount, robot } from "../assets/Assets";
import GetStarted from "./GetStarted";
import { fadeVariants } from "./Animation"; // Import your fade-in animation variant

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="d-flex"
      initial="initial" // Set initial animation state
      animate="animate" // Set animate animation state
      variants={fadeVariants} // Use the fade-in animation variant
    >
      <Container>
        <Row className="justify-content-between align-items-center pe-4">
          <Col md="12" lg="6">
            <div className="d-flex align-items-center py-2 px-3 bg-discount-gradient rounded-3 my-2 my-4 w-content">
              <img src={discount} alt="discount" />
              <p className="text-white-50 mx-2 mb-0 fs-5">
                <span className="text-white">20%</span> Discount For
                <span className="text-white"> 1 Month</span> Account
              </p>
            </div>

            <div className="d-flex">
              <h1 className="fw-bold text-white display-1">
                The Next
                <br />
                <span className="text-gradient">Generation</span>
              </h1>
              <div className="mt-5 ms-5">
                <GetStarted />
              </div>
            </div>

            <h1 className="text-white display-2 fw-bold">Payment Method.</h1>
            <p className="mt-5 text-secondary fs-5">
              Our team of experts uses a methodology to identify the credit
              cards to fit your needs. We examine annual percentage rates,
              annual fees.
            </p>
          </Col>

          <Col md="12" lg="6" className="my-6">
            <div className="position-relative z-3">
              <img
                src={robot}
                alt="billing"
                className="img-fluid position-relative z-2"
              />
              {/* gradient start */}
              <div className="position-absolute z-1 w-40 h-35 top-0 pink__gradient" />
              <div className="position-absolute z-0 w-80 h-80 rounded-circle white__gradient bottom-40" />
              <div className="position-absolute z-1 w-50 h-50 right-20 bottom-20 blue__gradient" />
              {/* gradient end */}
            </div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default Hero;
