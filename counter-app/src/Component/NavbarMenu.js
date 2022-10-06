import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavbarMenu = ({ counters }) => {

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Navbar><span className='bg-secondary badge rounded py-1 px-2'>{counters}</span></Navbar>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;