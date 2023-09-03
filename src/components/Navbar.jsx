import { Navbar, Nav, Container } from "react-bootstrap";
import { logo } from "../assets/Assets";
import { navLinks } from "../constants/Data.js";
import { useState } from "react"; // Import useState from React

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false); // Initialize a state variable

  const handleNavItemClick = () => {
    setExpanded(false); // Set the state to close the Navbar
  };

  return (
    <Navbar className="mt-2" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="hoo_bank" className="w-40" />
        </Navbar.Brand>
        <Navbar.Toggle
          className="bg-transparent border-0 shadow-none ms-auto NavbarToggleMargin "
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)} // Toggle Navbar state
        />
        <Navbar.Collapse
          className="mt-2 bg-Collapse rounded-4 text-center"
          id="basic-navbar-nav"
        >
          <Nav className="ms-auto">
            {navLinks.map((NavItem) => (
              <Nav.Link
                key={NavItem.id}
                className="me-3 text-secondary fs-18 link-info"
                href={`#${NavItem.id}`}
                onClick={handleNavItemClick} // Close Navbar when a link is clicked
              >
                {NavItem.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
