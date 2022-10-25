import React from 'react';
import { CDBFooter, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import logo from '../../../assets/images/navBrand.png';
import { FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='my-3'>
            <CDBFooter className="shadow-lg">
                <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
                    <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                        <CDBBox>
                            <Link to="/" className="d-flex align-items-center p-0 text-dark">
                                <img alt="logo" src={logo} width="30px" />
                                <span className="ml-3 h5 font-weight-bold">Devwares</span>
                            </Link>
                            <p className="my-3" style={{ width: '250px' }}>
                                <span className='fs-5 d-flex align-items-center text-muted'><FaRegEnvelope className='me-1' />fazlarabby41@gmail.com</span>
                                <span className='fs-5 d-flex align-items-center text-muted'><FaPhoneAlt className='me-1' />5984614</span>
                                <span className='fs-5 d-flex align-items-center text-muted'><FaMapMarkerAlt className='me-1' />Cumilla, Bangladesh</span>
                            </p>
                            <CDBBox display="flex" className="mt-4 mb-2 mb-md-0">
                                <CDBBtn flat color="dark">
                                    <CDBIcon fab icon="facebook-f" />
                                </CDBBtn>
                                <CDBBtn flat color="dark" className="mx-3">
                                    <CDBIcon fab icon="twitter" />
                                </CDBBtn>
                                <CDBBtn flat color="dark" className="p-2">
                                    <CDBIcon fab icon="instagram" />
                                </CDBBtn>
                            </CDBBox>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                                Devwares
                            </p>
                            <CDBBox className='d-flex flex-column' style={{ cursor: 'pointer', padding: '0' }}>
                                <Link to='/courses' className='text-primary fw-semibold'>Courses</Link>
                                <Link to='/blogs' className='text-primary fw-semibold'>Blogs</Link>
                                <Link to='/faq' className='text-primary fw-semibold'>FAQ</Link>
                            </CDBBox>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4" style={{ fontWeight: '600', color: '#ff4d4d' }}>
                                Join Us Now
                            </p>
                            <CDBBox className='d-flex flex-column' style={{ cursor: 'pointer', padding: '0' }}>
                                <Link to='/login' className='text-primary fw-semibold'>
                                    Login
                                </Link>
                                <Link to='/registration' className='text-primary fw-semibold'>Registration</Link>
                            </CDBBox>
                        </CDBBox>
                    </CDBBox>
                    <small className="text-center mt-5">&copy; Devwares, 2020. All rights reserved.</small>
                </CDBBox>
            </CDBFooter>
        </div>
    );
};

export default Footer;