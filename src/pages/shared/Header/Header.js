import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Brand ><Link to='/home' className='text-dark text-decoration-none font-weight-bold fs-4 '>EDU LEARNING</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className=' bg-warning' />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex align-items-center justify-content-between  ">
                        <Link className='text-decoration-none text-dark'  to='/home'>HOME</Link>
                        <Link className='ms-2 text-decoration-none text-dark' to='/course'>COURSE</Link>
                        <Link className='ms-2 text-decoration-none text-dark' to='/faq'>FAQ</Link>
                        <Link className='ms-2 text-decoration-none text-dark' to='/blog'>BLOG</Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;