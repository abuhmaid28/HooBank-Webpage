import { Container } from "react-bootstrap";
import { clients } from "../constants/Data";

const Clients = () => (
  <section className="my-4">
    <Container>
      <div className="row mx-auto">
        {clients.map((client) => (
          <div key={client.id} className="col-6 col-sm-3 p-5">
            <img
              src={client.logo}
              alt="client_logo"
              className="logo object-fit-contain sm-w"
            />
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Clients;
