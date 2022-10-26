import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main';
import Blogs from '../../Pages/Blog/Blogs';
import ErrorPage from '../../Pages/Common/ErrorPage/ErrorPage';
import CourseDetails from '../../Pages/CourseDetails/CourseDetails';
import Courses from '../../Pages/Courses/Courses';
import FAQ from '../../Pages/FAQ/FAQ';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Login/Register';
import PurchaseCourse from '../../Pages/PurchaseCourse/PurchaseCourse';
import UserProfile from '../../Pages/User/UserProfile/UserProfile';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => fetch("http://localhost:5000/courses"),
                element: <Courses></Courses>
            },
            {
                path: '/coursedetails/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <UserProfile></UserProfile>
            },
            {
                path: '/purchase/:id',
                element: <PrivateRoute>
                    <PurchaseCourse></PurchaseCourse>
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            }
        ]
    }
])
