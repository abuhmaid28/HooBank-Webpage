import { Container } from "react-bootstrap";
import { stats } from "../constants/Data";

const Stats = () => (
  <section className="d-flex stats">
    <Container className="d-flex justify-content-around align-items-center my-md-3 flex-column flex-md-row">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="d-flex justify-content-center align-items-center flex-xl-row flex-column my-2 "
        >
          <h4 className="flex-wrap text-white mb-0 fw-bold display-5 py-lg-0 py-1">
            {stat.value}
          </h4>
          <p className=" text-gradient text-uppercase mb-0 mt-3 fs-4 ms-2">
            {stat.title}
          </p>
        </div>
      ))}
    </Container>
  </section>
);

export default Stats;
