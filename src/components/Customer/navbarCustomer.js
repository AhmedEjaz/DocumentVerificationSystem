import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbarCustomer.css';

function NavbarCustomer() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navv">
      <Container>
        <Navbar.Brand href="/uploader" style={{ color: 'white' }}>DocGuardian</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/uploader" style={{ color: 'white' }}>Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/" style={{ color: 'white' }}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustomer;