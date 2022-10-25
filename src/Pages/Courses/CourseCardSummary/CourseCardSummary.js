import React from 'react';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaUsers, FaStar } from "react-icons/fa";

const CourseCardSummary = ({ course }) => {
    const { id, course_name, description, ratings, thumbnail_img, total_student } = course;
    return (
        <Col>
            <Card className='shadow'>
                <Card.Img style={{ height: '250px' }} variant="top" src={thumbnail_img} />
                <Card.Body>
                    <Card.Title>Course Name: <span className='text-info'>{course_name}</span></Card.Title>
                    <>
                        <Card.Text className='mt-3 d-flex justify-content-between'>
                            <span className='d-flex align-items-center'><FaUsers className='me-2' /><span className='fs-5 text-muted'>{total_student}students</span></span>
                            <span className='d-flex align-items-center'><FaStar className='me-2 text-warning' /><span className='fs-5 text-muted'>{ratings}</span></span>

                        </Card.Text>
                        <p>
                            {
                                description.length === 200 ?
                                    description :
                                    description.slice(0, 200)
                            }
                            <span className='fs-5'><Link to={`/coursedetails/${id}`} className='text-decoration-none'>...Read More</Link></span>
                        </p>
                    </>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/coursedetails/${id}`}><Button className='w-100 py-2 fw-semibold' variant="dark">Course Details</Button></Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default CourseCardSummary;