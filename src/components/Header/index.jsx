import { Button, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { Container, Form } from "reactstrap";
import "./styles.css";

export const Header = () => (
<<<<<<< Updated upstream:src/components/Header/index.jsx
  <div className="header">
    <a href="#default" className="personalName">
      Gustavo Queir&oacute;z de Souza
    </a>
    <div className="header-right">
      <a href="#contact">Contato</a>
    </div>
  </div>
=======
  <Navbar bg="primary" variant="dark" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">NavBar</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
>>>>>>> Stashed changes:src/components/Header/Header.jsx
);
