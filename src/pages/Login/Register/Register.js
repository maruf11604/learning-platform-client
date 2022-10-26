import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
    const handleSubmit=event=>{
        event.preventDefault();
    }
    return (
         <Form onSubmit={handleSubmit} className='w-50 mx-auto border m-3 p-3'>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" />
                    
                </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control name='photoUrl' type="text" placeholder="PhotoURL" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
            
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
         </Form>
    );
};

export default Register;