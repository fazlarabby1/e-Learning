import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { FaUsers, FaStar } from "react-icons/fa";
import './CourseDetails.css';

const CourseDetails = () => {
    const singleCourse = useLoaderData();
    console.log(singleCourse);
    const { id, course_name, description, ratings, thumbnail_img, total_student } = singleCourse;
    return (
        <div className='container mt-5 details-card'>
            <Card className='mx-auto'>
                <Card.Img variant="top" style={{ height: '500px' }} src={thumbnail_img} />
                <Card.Body>
                    <Card.Title className='text-center fs-3'><span className='text-decoration-underline'>Course Title</span>: {course_name}</Card.Title>

                    <hr />
                    <>
                        <Card.Text className='mt-3 d-flex justify-content-between'>
                            <span className='d-flex align-items-center'><FaUsers className='me-2' /><span className='fs-5 text-muted'>{total_student}students</span></span>
                            <span className='d-flex align-items-center'><FaStar className='me-2 text-warning' /><span className='fs-5 text-muted'>{ratings}</span></span>

                        </Card.Text>
                        <p> {description} </p>
                    </>
                    <p className='btn btn-primary fs-4 w-25 d-flex justify-content-center mx-auto'>
                        <Link to={`/purchase/${id}`} className='text-decoration-none text-light'>Purchase Course
                        </Link>
                    </p>
                </Card.Body>
            </Card>
            <p className='mt-5 btn btn-primary text-center w-25 d-flex justify-content-center mx-auto'>
                <Link className='text-decoration-none text-light' to='/courses' >View All Courses</Link>
            </p>
        </div>
    );
};

export default CourseDetails;