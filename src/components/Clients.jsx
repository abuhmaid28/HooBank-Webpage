import { Container } from "react-bootstrap";
import { clients } from "../constants/Data";
import AnimatedComponent from "./AnimatedComponent";
const Clients = () => {
  return (
    <AnimatedComponent type={"fade-down"}>
      <section className="my-4 clients-section">
        <Container>
          <AnimatedComponent type={"fade-down"}>
            <div className="row mx-auto">
              {clients.map((client) => (
                <div key={client.id} className="col-6 col-lg-3 p-5">
                  <img
                    src={client.logo}
                    alt="client_logo"
                    className="logo object-fit-contain sm-w"
                  />
                </div>
              ))}
            </div>
          </AnimatedComponent>
        </Container>
      </section>
    </AnimatedComponent>
  );
};

export default Clients;
