import { Button, Container, Form, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import './Navbar.css';

export default function Navbars() {

    return (
        <>
            <Navbar bg="light" expand="lg" className='mb-5'>
                <Container>
                    <Navbar.Brand>
                        <Link to="/">
                            <Image
                                src='https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                                className='rounded nav-image thumbnail'
                            ></Image>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 nav-container"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to="/" className='px-2 nav-item nav-link nav-home' end>Movies</NavLink>
                            <NavLink to="/customers" className='px-2 nav-item nav-link nav-slide'>Customers</NavLink>
                            <NavLink to="/rentals" className='px-2 nav-item nav-link nav-slide'>Rentals</NavLink>
                            <NavLink to="/login" className='px-2 nav-item nav-link nav-slide'>Login</NavLink>
                            <NavLink to="/signup" className='px-2 nav-item nav-link nav-slide'>Sign Up</NavLink>
                            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
