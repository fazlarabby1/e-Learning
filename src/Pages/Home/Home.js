import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Button from 'react-bootstrap/Button';
import { FaHandPointDown } from 'react-icons/fa';

const Home = () => {
    return (
        <div>
            <div className='home d-flex align-items-center'>
                <div>
                    <h2 className='fs-1 text-center text-warning pt-5 pt-sm-2 pt-md-2'>Let us help you to make your learning effective</h2>
                    <p className='text-light text-center border border-0 w-50 mx-auto'>Learn all the main courses of <span className='text-warning fw-bold'>CSE</span> from this website. We will guide you to get the best out of the courses. We provide <span className='text-warning fw-bold'>video tutorials</span> for each courses and a syllabus. Also, we take <span className='text-warning fw-bold'>exams</span> after the end of the course so that you can find out what you have learnt. There are weekly quiz and exams to help you utilize your learning. <br /> Click to check our courses <FaHandPointDown style={{ color: 'orange' }} /></p>
                    <Link className='d-flex justify-content-center text-decoration-none' to='/courses'><Button className='fw-semibold fs-5 px-3 text-danger' variant="warning">Courses</Button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default Home;