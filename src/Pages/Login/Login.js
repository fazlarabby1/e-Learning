import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import ResetPassword from './ResetPassword/ResetPassword';

const Login = () => {
    const { logIn, providerLogin, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [modalShow, setModalShow] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                form.reset();
                if (user) {
                    navigate(from, { replace: true });
                    setLoading(false)
                    toast.success('Successfully logged in', { autoclose: 500 })
                }
            })
            .catch(error => {
                setError(error)
                toast.error('Opp!! An error occurred', { autoclose: 500 })
            })

    }

    const handleGoogleSingIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                toast.success('Successfully logged in', { autoclose: 500 })
            })
            .catch(error => {
                setError(error);
                toast.error('Opp!! An error occurred', { autoclose: 500 })
            })
    }

    const handleGitHubSigIn = () => {
        providerLogin(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
            })
            .catch(error => setError(error))
    }

    return (
        <div className='container py-5'>
            <Card className='w-75 mx-auto shadow'>
                <Card.Body>
                    <Card.Title className='text-center fs-4 text-info'>Please Login</Card.Title>
                    <Form onSubmit={handleLogIn} className='mx-auto'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicCheckbox">
                            <span>Forgot Password? <Link onClick={() => setModalShow(true)}>Reset Password</Link></span>
                            {error && <span className='text-danger fs-5 mb-2'>{error?.message}</span>}
                            <span className='fs-5'>Don't have an account? Please <Link to='/register'>Register</Link></span>
                        </Form.Group>
                        <Button className='px-4' variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <div className='d-md-flex flex-column d-sm-block justify-content-center mx-auto'>
                        <Button variant='dark' onClick={handleGoogleSingIn} className='px-4 my-2 mx-auto'><small>Sign In With Google</small></Button>
                        <Button variant='dark' onClick={handleGitHubSigIn} className='px-4 mx-auto'><small>Sign In With GitHub</small></Button>
                    </div>
                </Card.Body>
            </Card>
            <ResetPassword
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default Login;