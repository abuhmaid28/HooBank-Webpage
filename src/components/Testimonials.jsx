import { Container } from "react-bootstrap";
import { feedback } from "../constants/Data";
import FeedbackCard from "./FeedbackCard";
import "../custom.css";
const Testimonials = () => (
  <section
    id="clients"
    className="position-relative d-flex justify-content-center align-items-center flex-column py-6"
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
            <FeedbackCard {...card} />
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Testimonials;
