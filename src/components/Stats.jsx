import { Container } from "react-bootstrap";
import { stats } from "../constants/Data";
import AnimatedComponent from "./AnimatedComponent";

const StatItem = ({ value, title }) => (
  <AnimatedComponent type={"zoom-out"}>
    <div className="d-flex justify-content-center align-items-center flex-xl-row flex-column my-2">
      <h4 className="flex-wrap text-white mb-0 fw-bold display-5 py-lg-0 py-1">
        {value}
      </h4>
      <p className="text-gradient text-uppercase mb-0 mt-3 fs-4 ms-2">
        {title}
      </p>
    </div>{" "}
  </AnimatedComponent>
);

const Stats = () => {
  return (
    <AnimatedComponent type={"zoom-out"}>
      <section className="d-flex stats">
        <Container className="d-flex justify-content-around align-items-center my-md-3 flex-column flex-md-row">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} title={stat.title} />
          ))}
        </Container>
      </section>{" "}
    </AnimatedComponent>
  );
};

export default Stats;
