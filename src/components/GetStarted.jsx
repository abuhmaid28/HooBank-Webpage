import { Button } from "react-bootstrap";
import { arrowUp } from "../assets/Assets";

const GetStarted = () => (
  <Button
    style={{ height: "140px", width: "140px" }}
    className="rounded-circle bg-transparent border-info border-2 d-none d-xl-block"
  >
    <div className="px-1">
      <span className="text-gradient fs-5">Get Started</span>
      <img src={arrowUp} alt="arrow-up" />
    </div>
  </Button>
);

export default GetStarted;
