import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
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
                               <span className='fs-5 d-flex align-items-center text-muted'><FaRegEnvelope className='me-1'/>fazlarabby41@gmail.com</span>
                               <span className='fs-5 d-flex align-items-center text-muted'><FaPhoneAlt className='me-1'/>5984614</span>
                               <span className='fs-5 d-flex align-items-center text-muted'><FaMapMarkerAlt className='me-1'/>Cumilla, Bangladesh</span>
                            </p>
                            <CDBBox display="flex" className="mt-4">
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
                            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                                <Link to='/courses' className='text-dark fw-semibold'><CDBFooterLink>Courses</CDBFooterLink></Link>
                                <Link to='/blogs' className='text-dark fw-semibold'><CDBFooterLink>Blogs</CDBFooterLink></Link>
                                <Link to='/faq' className='text-dark fw-semibold'><CDBFooterLink>FAQ</CDBFooterLink></Link>
                            </CDBBox>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                                Enroll
                            </p>
                            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                                <Link to='/login' className='text-dark fw-semibold'>
                                <CDBFooterLink >Login</CDBFooterLink>
                                </Link>
                                <Link to='/registration' className='text-dark fw-semibold'><CDBFooterLink>Registration</CDBFooterLink></Link>
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