import React, { useEffect } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import './CoursesSwiper.css';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { FaUsers, FaStar } from "react-icons/fa";

const CoursesSwiper = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <>
            <Swiper
                breakpoints={{
                    // when window width is >= 640px
                    270: {
                        width: 270,
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    1024: {
                        width: 1024,
                        slidesPerView: 3,
                    }
                }}
                slidesPerView={3}
                spaceBetween={20}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="swiper-container px-0"
            >
                {
                    courses.map(course => <SwiperSlide key={course.id}>
                        <Card className='mb-5' style={{ width: '22rem', height: '20rem' }}>
                            <Card.Img className='h-50' variant="top" src={course.thumbnail_img} />
                            <Card.Body>
                                <Card.Title className='fs-5 text-start'>Course Title: {course.course_name}</Card.Title>
                            </Card.Body>
                                <Card.Footer className="text-muted className='mt-3 d-flex justify-content-between py-4'">
                                    <span className='d-flex align-items-center'><FaUsers className='me-2' /><span className='fs-5 text-muted'>{course.total_student}students</span></span>
                                    <span className='d-flex align-items-center'><FaStar className='me-2 text-warning' /><span className='fs-5 text-muted'>{course.ratings}</span></span>
                                </Card.Footer>
                        </Card>
                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default CoursesSwiper;