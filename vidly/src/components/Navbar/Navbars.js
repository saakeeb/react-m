import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import './Navbar.css';

export default function Navbars() {

    return (
        <>
            <Navbar bg="light" variant="light" className='py-1 mb-5'>
                <Container>
                    <NavbarBrand>
                        <Link to="/">
                            <Image
                                src='https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                                className='rounded nav-image thumbnail'
                            ></Image>
                        </Link>
                    </NavbarBrand>
                    <Nav className="me-auto nav-container">
                        <NavLink to="/" className='px-2 nav-item nav-link nav-home' end>Movies</NavLink>
                        <NavLink to="/customers" className='px-2 nav-item nav-link nav-slide'>Customers</NavLink>
                        <NavLink to="/rentals" className='px-2 nav-item nav-link nav-slide'>Rentals</NavLink>
                        <NavLink to="/login" className='px-2 nav-item nav-link nav-slide'>Login</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
