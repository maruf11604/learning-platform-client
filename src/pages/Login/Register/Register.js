import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
   
    
    const {createUser,updateUserProfile}=useContext(AuthContext);
    const [result,setResult]=useState();
    
    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photoURL=form.photoURL.value;
        const email=form.email.value;
        const password=form.password.value;
        // console.log(name,photoURL,email,password);

        createUser(email,password)
        .then(result =>{
            const user=result.user;
            console.error(user);
            form.reset();
            handleUpdateuserProfile(name,photoURL)

        })
        .catch((e)=> {
            const errorMessage = e.message;
            setResult(errorMessage);
            console.log(e);
        })
    }

    const handleUpdateuserProfile=(name,photoURL)=>{
        const profile={
            displayName: name,
            photoURL:photoURL
        }
        updateUserProfile(profile)
            .then(()=>{})
            .catch(error=>{console.log(error)})
    }
    return (
         <Form onSubmit={handleSubmit} className='w-50 mx-auto border m-3 p-3'>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" />
                    
                </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="PhotoURL" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
            
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Form.Text className='text-warning'>
                    {
                       result
                    }
                </Form.Text>
                <>if you are register <Link to='/login'>login</Link></>
                
         </Form>
    );
};

export default Register;