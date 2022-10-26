import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const ResetPassword = (props) => {
    const {resetPassword} = useContext(AuthContext);
    const [email, setEmail] = useState('');

    const handleResetPassword = () =>{
        if(email.length>0){
            resetPassword(email)
            .then(()=>{
                toast.success('Reset mail was sent. Please check your spam folder', {autoclose: 500});
                props.onHide();
            })
            .catch(error=>console.error(error))
        }
        else
        toast.error('Enter your email please', {autoclose: 500})
    }
    return (
        <div>
            <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className='text-info' id="contained-modal-title-vcenter">
          Reset Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input onBlur={(e)=>{setEmail(e.target.value)}} className='form-control p-3 my-2' type="email" name="email" placeholder="Enter Email" required/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleResetPassword}>Confirm</Button>
      </Modal.Footer>
    </Modal>
        </div>
    );
};

export default ResetPassword;