import React, { useState } from 'react';
import styles from './SignUp.module.css';
import signUpImage from '../../../src/assets/images/signup-image.png';
import logo from '../../../src/assets/images/logo.png'
import DropDown from '../DropDown/DropDown';
import { occupation } from '../../assets/fakeData/fakeData';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data)
    };
    return (
        <Container fluid>

            <Row>
                <Col md={6} className={'px-0 d-none d-md-block'} >
                    <img className={styles.signUpImage} src={signUpImage} alt="" />
                </Col>
                <Col md={6} >
                    <div className='text-center '>
                        <img className={styles.logo} src={logo} alt="" />
                    </div>
                    <h1 className={styles.title}>Sign Up</h1>
                    <p className={styles.typography}>Fill Out The Form</p>
                    <Container>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>

                            <Row>
                                <Col md={6} className='mb-2'>
                                    <input className={styles.input} type="text" placeholder='First Name' {...register("firstName", { required: true })} />

                                    <span className={`${errors.firstName ? styles.visible : ""} ${!errors.firstName ? styles.error : ""}`} >This field is required</span>
                                </Col>
                                <Col md={6} className='mb-2'>
                                    <input className={styles.input} type="text" placeholder='Last Name' {...register("lastName", { required: true })} />

                                    <span className={`${errors.lastName ? styles.visible : ""} ${!errors.lastName ? styles.error : ""}`} >This field is required</span>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6} className='mb-2'>
                                    <input className={styles.input} type="email" placeholder='E-mail'  {...register("email", { required: true })} />

                                    <span className={`${errors.email ? styles.visible : ""} ${!errors.email ? styles.error : ""}`} >This field is required</span>
                                </Col>
                                <Col md={6} className='mb-2'>
                                    <input className={styles.input} type="tel" placeholder='Phone' {...register("phome", { required: true })} />

                                    <span className={`${errors.phome ? styles.visible : ""} ${!errors.phome ? styles.error : ""}`} >This field is required</span>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6} className='mb-2'>
                                    <input className={styles.input} type="date" placeholder='Date of Birth'  {...register("dob", { required: true })} />

                                    <span className={`${errors.dob ? styles.visible : ""} ${!errors.dob ? styles.error : ""}`} >This field is required</span>
                                </Col>
                                <Col md={6} className='mb-2'>
                                    <input className={styles.input} type="number" placeholder='Postcode' {...register("postcode", { required: true })} />

                                    <span className={`${errors.postcode ? styles.visible : ""} ${!errors.postcode ? styles.error : ""}`} >This field is required</span>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6} className='mb-2'>
                                    <select className={styles.input}  {...register("occupation", { required: true })} >
                                        <option disabled>
                                            Occupaton
                                        </option>
                                        {
                                            occupation.map((el, i) => <option key={i} value={el}>{el}</option>)
                                        }
                                    </select>
                                    <span className={`${errors.postcodeRequired ? styles.visible : ""} ${!errors.postcodeRequired ? styles.error : ""}`} >This field is required</span>
                                </Col>
                                <Col md={6} className='mb-2'>
                                    <input className={styles.input} type="text" placeholder='Clinic Name' {...register("clinicName", { required: true })} />

                                    <span className={`${errors.clinicName ? styles.visible : ""} ${!errors.clinicName ? styles.error : ""}`} >This field is required</span>
                                </Col>
                            </Row>


                            <Row>
                                <Col md={6} className='mb-2'>
                                    <input className={styles.input} type="password" placeholder='Password'  {...register("password", { required: true })} />

                                    <span className={`${errors.password ? styles.visible : ""} ${!errors.password ? styles.error : ""}`} >This field is required</span>
                                </Col>
                                <Col md={6} className='mb-2'>
                                    <input className={styles.input} type="password" placeholder='Confirm Psssword' {...register("confirmPassword", { validate: value => value === (watch('password')) })} />

                                    <span className={`${errors.confirmPassword ? styles.visible : ""} ${!errors.confirmPassword ? styles.error : ""}`} >Password didn't match</span>
                                </Col>
                            </Row>
                            <div className='text-center my-3'>
                                <button type='submit' className={styles.signupBtn}>
                                    sign up
                                </button>
                            </div>

                            <div className="text-center">
                                <span className={`${errors.checkbox ? styles.visible : ""} ${!errors.checkbox ? styles.error : ""}`} >This field is required</span>
                            </div>
                            <div className='d-flex justify-content-center '>
                                <div className="w-75">
                                    <div className='d-flex justify-content-center'>
                                        <div className='me-2'>
                                            <input type="checkbox" name="" id="" {...register("checkbox", { required: true })} />

                                        </div>
                                        <p>I am agree with the <a className={styles.link} href="#/">Terms of Services</a> and the <a className={styles.link} href="#/">Privacy Policy</a> of Link Me Digital Health.</p>
                                    </div>

                                </div>
                            </div>

                        </form>

                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;