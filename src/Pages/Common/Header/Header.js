import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid className='container py-2'>
                    <Navbar.Brand to="/">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex me-auto">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 ms-5"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='me-2' to="/home"><Button variant="outline-info">Home</Button></Link>
                            <Link className='me-2' to="/courses"><Button variant="outline-info">Courses</Button></Link>
                            <Link className='me-2' to="/blogs"><Button variant="outline-info">Blogs</Button></Link>
                            <Link className='me-2' to="/faq"><Button variant="outline-info">FAQ</Button></Link>
                        </Nav>
                        
                        <Link to="/login"><Button variant="outline-info">Login</Button></Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;