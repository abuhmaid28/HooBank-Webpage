import { useEffect } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimatedComponent = ({ children, type }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 500,
      once: true,
    });
  }, [type]); // Remove 'duration' from the dependency array

  return <div data-aos={type ? type : "fade-up"}>{children}</div>;
};

AnimatedComponent.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

export default AnimatedComponent;
