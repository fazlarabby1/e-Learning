import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Button from 'react-bootstrap/Button';
import { FaHandPointDown } from 'react-icons/fa';
import CoursesSwiper from './CoursesSwiper/CoursesSwiper';

const Home = () => {
    return (
        <div>
            <div className='home'>
                <div className='d-flex flex-column align-items-center'>
                    <h2 className='fs-1 text-center text-warning mt-md-5 pt-4 pt-md-4'>Let us help you to make your learning effective</h2>
                    <p className='text-light text-md-center'>Learn all the main courses of <span className='text-warning fw-bold'>CSE</span> from this website. We will guide you to get the best out of the courses. We provide <span className='text-warning fw-bold'>video tutorials</span> for each courses and a syllabus. Also, we take <span className='text-warning fw-bold'>exams</span> after the end of the course so that you can find out what you have learnt.<br /> Click to check our courses <FaHandPointDown style={{ color: 'orange' }} /></p>
                    <Button className='fw-semibold fs-5 px-3 d-flex mx-auto' variant="warning"><Link className='text-decoration-none text-danger' to='/courses'>Courses</Link></Button>
                </div>
            </div>
            <div className='my-md-5 my-4'>
                <h3 className='text-center text-info'>A glimpse of our courses</h3>
                <CoursesSwiper></CoursesSwiper>
                <p className='text-center fs-5'><Link to='/courses'>View All Courses</Link></p>
            </div>
        </div>
    );
};

export default Home;