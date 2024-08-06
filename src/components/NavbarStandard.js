import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarStandard() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container class="container-fluid">
        <Navbar.Brand href="#home">RS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Work</Nav.Link>
            <Nav.Link href="#link">About Me</Nav.Link>
            <NavDropdown title="Contacts" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Contacts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Linkedin
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Github</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarStandard;