import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {
    const{providerLogin}=useContext(AuthContext);
    const googleProvider= new GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
        .then(result =>{
            const user =result.user;
            console.log(user);
        })
        .catch(error =>console.error(error))
    }
    return (
        <div className='py-5'>
            <Form className='w-50 mx-auto border m-3 p-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
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