import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './adminNavbar.css';

function AdminNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navv">
      <Container>
        <Navbar.Brand href="/" style={{ color: 'white' }}>DocGuardian</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/adminhome" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link href="/adminabout" style={{ color: 'white' }}>Documents</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/" style={{ color: 'white' }}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;