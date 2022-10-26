import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/navBrand.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import { Image } from 'react-bootstrap';
import { useState } from 'react';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState("Dark");

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleTheme = event => {
        const defaultTheme = event.target;
        if (defaultTheme.innerText === "Dark") {
            setTheme("Light")
            defaultTheme.innerText = theme;
        }
        else {
            setTheme("Dark")
            defaultTheme.innerText = theme;
        }
    }
    return (
        <div>
            <Navbar className='py-md-0 py-lg-3' bg="dark" variant="dark" expand="lg">
                <Container fluid className='container py-2'>
                    <img src={logo} alt="Bootstrap" width="30" height="30" />
                    <Link className='text-decoration-none fs-4 fst-italic text-light' to="/">e-<span className='text-warning'>Learning</span></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className=''>
                        <Form className="d-flex me-auto my-3 my-lg-0">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 ms-5"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav
                            className="me-auto my-lg-0"
                            style={{ maxHeight: '300px' }}
                            navbarScroll
                        >
                            <Nav>
                                <Link className='me-2 my-2 my-lg-0' to="/home"><Button variant="outline-info">Home</Button></Link>
                                <Link className='me-2 my-2 my-lg-0' to="/courses"><Button variant="outline-info">Courses</Button></Link>
                                <Link className='me-2 my-2 my-lg-0' to="/blogs"><Button variant="outline-info">Blogs</Button></Link>
                                <Link className='me-2 my-2 my-lg-0' to="/faq"><Button variant="outline-info">FAQ</Button></Link>
                                <Link><Button onClick={handleTheme} className='me-2 my-2 my-lg-0' variant="outline-info">Dark</Button></Link>
                            </Nav>
                            <Nav className='ms-lg-5'>
                                {user?.uid ?
                                    <div className='d-flex d-lg-block flex-column'>
                                        <Button onClick={handleSignOut} className='mx-lg-3 my-2 my-lg-0' variant="outline-info">Log Out</Button>
                                        <Link to="/profile">
                                            {
                                                user?.photoURL ?
                                                    <Image title={user?.displayName} style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image> :
                                                    <FaUserAlt></FaUserAlt>
                                            }
                                        </Link>
                                    </div>
                                    :
                                    <Link className='ms-lg-5 my-2 my-lg-0' to="/login"><Button variant="outline-info">Login</Button></Link>
                                }
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;