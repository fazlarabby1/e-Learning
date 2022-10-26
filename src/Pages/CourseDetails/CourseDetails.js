import React from 'react';
import Pdf from "react-to-pdf";
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { FaUsers, FaStar, FaDownload } from "react-icons/fa";
import './CourseDetails.css';
const ref = React.createRef();

const CourseDetails = () => {
    const singleCourse = useLoaderData();
    const { id, course_name, description, ratings, thumbnail_img, total_student } = singleCourse;
    return (
        <div className='container mt-5 details-card'>

            <h3 className='text-center mb-3 text-info'>Click to Download the PDF File <Pdf targetRef={ref} filename={course_name+".pdf"}>
                {({ toPdf }) =><FaDownload onClick={toPdf} className='ms-5 text-success' />}
            </Pdf></h3>
            <Card className='mx-auto' ref={ref}>
                <Card.Img variant="top" style={{ height: '500px' }} src={thumbnail_img} />
                <Card.Body>
                    <Card.Title className='text-center fs-3'><span className='text-decoration-underline'>Course Title</span>: {course_name}
                    </Card.Title>
                    <hr />
                    <>
                        <Card.Text className='mt-3 d-flex justify-content-between'>
                            <span className='d-flex align-items-center'><FaUsers className='me-2' /><span className='fs-5 text-muted'>{total_student}students</span></span>
                            <span className='d-flex align-items-center'><FaStar className='me-2 text-warning' /><span className='fs-5 text-muted'>{ratings}</span></span>

                        </Card.Text>
                        <p> {description} </p>
                    </>
                    <p className='btn btn-dark fs-4 w-25 d-flex justify-content-center mx-auto'>
                        <Link to={`/purchase/${id}`} className='text-decoration-none text-warning'>Get Premium Access
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