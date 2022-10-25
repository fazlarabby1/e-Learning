import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CoursesCards from './CoursesCards/CoursesCards';
import LeftSideMenu from './LeftSideMenu/LeftSideMenu';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='mt-4'>
            <Container>
                <Row>
                    <Col lg="4" className=''>
                        <LeftSideMenu></LeftSideMenu>
                    </Col>
                    <Col lg="8">
                        <CoursesCards courses={courses}></CoursesCards>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;