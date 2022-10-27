import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {
    const [error,setError]=useState('');
    const navigate=useNavigate();
    const{providerLogin,signIn}=useContext(AuthContext);
    const googleProvider= new GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
        .then(result =>{
            const user =result.user;
            console.log(user);
        })
        .catch(e =>{
            console.error(e)
        })
    }

    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value ;
        const password =form.password.value ;
        signIn(email,password)
        .then(result =>{
            const user=result.user;
            console.log(user)
            form.reset();
            navigate('/')
        })
        .catch((e)=> {
            console.log(e);
            const errorMessage = e.message;
            setError(errorMessage);
        })
    }
    return (
        <div className='py-5'>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto border m-3 p-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
            
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className='text-warning'>
                    {
                       error
                    }
                </Form.Text>
            </Form>

            <p className='text-center'>or</p>
            <div className='d-flex flex-column w-25 justify-content-center mx-auto'>
                <Button onClick={handleGoogleSignIn} className='text-center' variant="outline-primary">SIGN IN WITH GOOGLE</Button> <br />
                <Button className='text-center' variant="outline-dark">SIGN IN WITH GITHUB</Button>
            </div>
        </div>
    );
};

export default Login;