import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../../../assets/images/error.png';
import Button from 'react-bootstrap/Button';


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            {error &&
                <div className='text-center'>
                    <img style={{width: '300px', marginTop: '120px'}} src={errorImg} alt="" />
                    <p className='text-warning fs-1 fw-semibold'>{error.status} <span className='text-dark fs-3'>{error.statusText}</span></p>
                    <Link to='/'><Button className='px-4 fs-5 fw-semibold' variant="success">Home</Button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;