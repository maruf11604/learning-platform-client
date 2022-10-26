import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const {user,toggleMode,bgMode,mode}=useContext(AuthContext);
    
    
    return (
        <div >
                <Navbar bg="light"className={bgMode}  expand="lg">
                    <Container fluid>
                        <Navbar.Brand ><Link to='/home'   className='text-dark text-decoration-none font-weight-bold fs-4 ' ><small className={mode}>EDU LEARNING</small></Link></Navbar.Brand>
                        <Navbar.Toggle  aria-controls="basic-navbar-nav" className='bg-primary' />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto d-flex align-items-center justify-content-between ">
                            <Link className='text-decoration-none text-dark'  to='/home' ><small className={mode}>HOME</small></Link>
                            <Link className='m-2 text-decoration-none text-dark' to='/topic' ><small className={mode}>COURSE</small></Link>
                            <Link className='me-2 text-decoration-none text-dark' to='/blog' ><small className={mode}>BLOG</small></Link>
                            <div className="form-check form-switch">
                                <input className="form-check-input"  onClick={toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                                            
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" ><small className={mode}>Dark Switch</small></label>            
                            </div>
                        </Nav>
                        <Nav className='ms-auto d-flex align-items-center justify-content-between'>
                        <Link className='ms-2 text-decoration-none text-dark' to='/blog' ><small className={mode}>{user?.displayName}</small></Link>
                        <Link className='ms-2 text-decoration-none text-dark' to='/login' ><small className={mode}>LOGIN</small></Link>
                        <Link className='ms-2 text-decoration-none text-dark' to='/register' ><small className={mode}>REGISTER</small></Link>
                        <Link className='ms-2 text-decoration-none text-dark' to='/register' ><small className={mode}>{user?.photoURL ? <Image src={user?.photoURL} roundedCircle style={{height:'40px'}} ></Image>: <FaUser></FaUser>}</small></Link>

                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
            
            
        </div>
        
    );
};

export default Header;