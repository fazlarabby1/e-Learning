import React from 'react';
import { useContext } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const UserProfile = () => {
    const {user, setLoading} = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const photoURLRef = useRef(user?.photoURL);
    const [confirmed, setConfirmed] = useState(false);

    const handleSubmitChange = event =>{
        event.preventDefault();
        // console.log(photoURLRef.current.value);
        const form = event.target;
        const newName = form.name.value;
        user.displayName = newName;
        setLoading(false)
    }
    const handleUpdateName = event =>{
        setName(event.target.value);
    }

    const handleConfirmed = event =>{
        setConfirmed(event.target.checked);
    }
    return (
        <div className='container my-4'>
            <Form onSubmit={handleSubmitChange} className='w-75 px-3 py-5 mx-auto shadow rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onChange={handleUpdateName} defaultValue={name} type="text" name='name' placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleConfirmed} type="checkbox" label="Confirm" />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!confirmed}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default UserProfile;