import { quotes } from "../assets/Assets";
import AnimatedComponent from "./AnimatedComponent";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <AnimatedComponent type={"flip-up"}>
      <div className="rounded-4 d-flex justify-content-between flex-column me-sm-5 p-4 my-4 feedback-card">
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
      </div>
    </AnimatedComponent>
  );
};

export default FeedbackCard;
