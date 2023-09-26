import React from 'react'
import { Button, Form } from 'react-bootstrap';
import * as formik from 'formik';
import { AuthValidation } from '../../../validation/auth';
import logo from "../../../assets/images/logo-dark.png"
import user from "../../../assets/images/users/user-1.jpg"
const LockScreen = () => {
    const { Formik } = formik;

    return (
        <div className="account-pages py-5 authentication-bg">
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
                                    <h4 className="text-uppercase mt-0 mb-4">Welcome Back</h4>
                                    <img src={user} width="88" alt="user-image" className="rounded-circle img-thumbnail" />
                                    <p className="text-muted my-4">Enter your password to access the admin.</p>
                                </div>
                                <Formik
                                    validationSchema={AuthValidation} // Use your validation schema here
                                    initialValues={{

                                        password: '',
                                    }}
                                    onSubmit={(values) => {
                                        // Handle form submission here
                                        console.log(values);
                                    }}
                                >
                                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                                        <Form noValidate onSubmit={handleSubmit}>

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

                                            <div className="mb-3 d-grid text-center">
                                                <Button className="btn btn-primary" type="submit"> Log In</Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>


                        <div className="row mt-3">
                            <div className="col-12 text-center">
                                <p className="text-muted">Not you? return <a href="pages-login.html" className="text-dark ms-1"><b>Sign In</b></a></p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}
export { LockScreen }
