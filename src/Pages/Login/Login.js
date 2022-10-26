import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container py-5'>
            <Card className='w-75 mx-auto shadow'>
                <Card.Body>
                    <Card.Title className='text-center fs-4 text-info'>Please Login</Card.Title>
                    <Form className='mx-auto'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required/>
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicCheckbox">
                            <span className='text-danger fs-5 mb-2'>Error occurred</span>
                            <span className='fs-5'>Don't have an account? Please <Link to='/register'>Register</Link></span>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;