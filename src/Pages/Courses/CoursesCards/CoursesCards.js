import React from 'react';
import CourseCardSummary from '../CourseCardSummary/CourseCardSummary';
import Row from 'react-bootstrap/Row';

const CoursesCards = ({ courses }) => {
    return (
        <div>
            <h1 className='fs-2 text-warning'>All courses summary</h1>
            <div>
            <Row xs={1} md={1} lg={2} xl={2} className="gy-5">
                    {
                        courses.map(course => <CourseCardSummary key={course.id} course={course}></CourseCardSummary>)
                    }
            </Row>
            </div>
        </div>
    );
};

export default CoursesCards;