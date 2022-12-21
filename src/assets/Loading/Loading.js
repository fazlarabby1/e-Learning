import React from 'react';
import Spinner from 'react-bootstrap/Spinner';


const Loading = () => {
    return (
        <div className='d-flex justify-content-center'>
            <Spinner className='fs-1' animation="border" variant="info" />
        </div>
    );
};

export default Loading;