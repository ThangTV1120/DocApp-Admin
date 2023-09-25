import React from 'react'
import { Button, Form } from 'react-bootstrap';
import * as formik from 'formik';
import { AuthValidation } from '../../../validation/auth';
import logo from "../../../assets/images/logo-dark.png"
const SignIn = () => {
    const { Formik } = formik;

    return (
        <div className="account-pages mt-5 mb-5 authentication-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-4">
                        <div className="text-center">
                            <a href="index.html">
                                <img src={logo} alt="" height="22" className="mx-auto" />
                            </a>
                            <p className="text-muted mt-2 mb-4">Responsive Admin Dashboard</p>

                        </div>
                        <div className="card">
                            <div className="card-body p-4">
                                <div className="text-center mb-4">
                                    <h4 className="text-uppercase mt-0">Sign In</h4>
                                </div>
                                <Formik
                                    validationSchema={AuthValidation} // Use your validation schema here
                                    initialValues={{
                                        email: '',
                                        password: '',
                                    }}
                                    onSubmit={(values) => {
                                        // Handle form submission here
                                        console.log(values);
                                    }}
                                >
                                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                                        <Form noValidate onSubmit={handleSubmit}>

                                            <Form.Group className="mb-3" controlId="validationFormikEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter your email"
                                                    isInvalid={touched.email && !!errors.email}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.email}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className='mb-3' controlId="validationFormikPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    placeholder="Enter your password"
                                                    isInvalid={touched.password && !!errors.password}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.password}
                                                </Form.Control.Feedback>
                                            </Form.Group>


                                            <Form.Group className="mb-3">
                                                <Form.Check
                                                    required
                                                    name="checkbox-signin"
                                                    label="Remember me"
                                                    onChange={handleChange}
                                               
                                                    // feedbackType="invalid"
                                                    id="checkbox-signin"
                                                />
                                            </Form.Group>
                                    

                                            <div className="mb-3 d-grid text-center">
                                                <Button className="btn btn-primary" type="submit">Submit form</Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>


                        <div className="row mt-3">
                            <div className="col-12 text-center">
                                <p> <a href="pages-recoverpw.html" className="text-muted ms-1"><i className="fa fa-lock me-1"></i>Forgot your password?</a></p>
                                <p className="text-muted">Don't have an account? <a href="pages-register.html" className="text-dark ms-1"><b>Sign Up</b></a></p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}
export { SignIn }
