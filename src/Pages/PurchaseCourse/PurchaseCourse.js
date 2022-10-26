import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { FaUsers, FaStar } from "react-icons/fa";

const PurchaseCourse = () => {
    const course = useLoaderData();
    const { course_name, ratings, thumbnail_img, total_student } = course;
    console.log(course);
    return (
        <div className='container my-5'>
            <h2 className='text-center text-info mb-3'>Join Now to Get Discount on Our Membership</h2>
            <Card className="text-center mt-4 mt-md-0">
                <span className="fs-5 position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger">
                    99$
                    <span class="visually-hidden">unread messages</span>
                </span>
                <Card.Header className='fw-bold fs-4'>Course Title: <span className='text-primary ms-2'>{course_name}</span></Card.Header>
                <Card.Body>
                    <Card.Title className='text-warning fs-2'>Join Us To Learn {course_name} Effectively</Card.Title>
                    <Card.Img className='img-fluid w-50' variant="top" src={thumbnail_img} />
                    <Card.Text className='w-75 mx-auto'>
                        We have more than {total_student} with us. You are warmly welcomed in this course and we guarantee you that you will enjoy this course a lot. We teach in a very friendly environment and all the other students are very friendly.
                    </Card.Text>
                    <Button className='px-4 fs-5' variant="primary">By Now</Button>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <span className='d-flex align-items-center'><FaUsers className='me-2' /><span className='fs-5 text-muted'>{total_student}students</span></span>
                    <span className='d-flex align-items-center'><FaStar className='me-2 text-warning' /><span className='fs-5 text-muted'>{ratings}</span></span>
                </Card.Footer>
            </Card>
            <p className='mt-5 btn btn-primary text-center w-25 d-flex justify-content-center mx-auto'>
                <Link className='text-decoration-none text-light' to='/courses' >View All Courses</Link>
            </p>
        </div>
    );
};

export default PurchaseCourse;