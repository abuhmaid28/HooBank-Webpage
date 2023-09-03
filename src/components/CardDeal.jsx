import { card } from "../assets/Assets";
import { Container, Row, Col } from "react-bootstrap";
import Button from "./Button";

const CardDeal = () => (
  <section>
    <Container>
      <Row className="align-items-center my-lg-5 py-5 text-md-start text-center">
        <Col xs={12} md={6}>
          <div>
            <h2 className=" text-white display-4 fw-bold lh-base">
              Find a better card deal in few easy steps.
            </h2>
            <p className="my-4 text-secondary fs-5">
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
              aliquet eget mauris tortor. Aliquet ultrices ac, amet au.
            </p>
            <div className=" mb-5 mb-lg-0">
              <Button />
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <img src={card} alt="billing" className="w-100 h-auto" />
        </Col>
      </Row>
    </Container>
  </section>
);

export default CardDeal;
