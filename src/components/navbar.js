import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { HashLink as Link } from 'react-router-hash-link';

function NavbarHome() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navv">
      <Container>
        <Navbar.Brand href="/" style={{ color: 'white' }}>DocGuardian</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
            <Link to='#about' className='btn' style={{ color: 'white', paddingTop:'7px' }}>About</Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login" style={{ color: 'white' }}>SignUp / SignIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;