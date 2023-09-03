import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { features } from "../constants/Data";
import Button from "./Button";
import { Card, Row, Col, Container } from "react-bootstrap";
import { fadeVariants } from "./Animation";

const FeatureCard = ({ icon, title, content }) => (
  <Card className="rounded-4 bg-transparent mb-4 feature-card">
    <div className="d-flex align-items-center ms-3">
      <div className="bg-dark rounded-circle p-3">
        <img src={icon} alt="feature icon" />
      </div>
      <div className="text-secondary">
        <Card.Body>
          <Card.Title className="text-white mb-1">{title}</Card.Title>
          <Card.Text className="w-85">{content}</Card.Text>
        </Card.Body>
      </div>
    </div>
  </Card>
);

const Business = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("features");
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
    <section>
      <Container className="my-lg-5 pt-5 mt-5">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <motion.section
              id="features"
              className="text-md-start text-center"
              initial="initial"
              animate={controls}
              variants={fadeVariants}
            >
              <div>
                <h2 className="fw-bold text-white display-5 lh-base">
                  You do the business,
                  <br />
                  we’ll handle the money.
                </h2>
                <p className="my-4 text-secondary w-100 fs-5">
                  With the right credit card, you can improve your financial
                  life by building credit, earning rewards, and saving money.
                  But with hundreds of credit cards on the market.
                </p>
              </div>
              <div className="mb-5 mb-lg-0">
                <Button />
              </div>
            </motion.section>
          </Col>
          <Col xs={12} md={6}>
            <Row className="justify-content-center justify-content-md-start">
              {features.map((feature) => (
                <Col xs={12} lg={12} key={feature.id}>
                  <motion.div
                    initial="initial"
                    animate={controls}
                    variants={fadeVariants}
                  >
                    <FeatureCard {...feature} />
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Business;
