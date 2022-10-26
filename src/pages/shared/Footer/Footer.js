import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { FaBeer ,FaFacebook,FaTwitter,FaYoutube,FaGoogle,FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Footer = () => {
    const {mode,bgMode}=useContext(AuthContext)
    return (
        <Container fluid>
            <div  className={bgMode}>
            <div className='text-center' >
            <div  className='d-flex justify-content-center  align-items-center flex-md-row flex-sm-column flex-column py-5'>
                <Link><FaFacebook className='fs-1 me-5'></FaFacebook></Link>
                <Link><FaTwitter className='fs-1 me-5'></FaTwitter></Link>
                <a href='https://www.youtube.com/' target='blank'><FaYoutube className='fs-1 me-5 text-danger'></FaYoutube></a>
                <Link><FaGoogle className='fs-1 me-5'></FaGoogle></Link>
               <Link> <FaInstagram className='fs-1 me-5 text-warning'></FaInstagram></Link>
            </div>
            <p className={mode}>@Copyright 2022 Maruf Ahmed</p>
        </div>
        </div>
        </Container>
    );
};

export default Footer;