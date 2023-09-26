import React from 'react'
import { Button, Form } from 'react-bootstrap';
import * as formik from 'formik';
import { AuthValidation } from '../../../validation/auth';
import logo from "../../../assets/images/logo-dark.png"
const RecoverPassword = () => {
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
                                    <h4 className="text-uppercase mt-0 mb-3">Reset Password</h4>
                                    <p className="text-muted mb-0 font-13">Enter your email address and we'll send you an email with instructions to reset your password.  </p>
                                </div>
                                <Formik
                                    validationSchema={AuthValidation} // Use your validation schema here
                                    initialValues={{
                                        fullname: "",
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

                                            <div className="mb-3 d-grid text-center">
                                                <Button className="btn btn-primary" type="submit">Reset Password</Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>


                        <div className="row mt-3">
                            <div className="col-12 text-center">
                                <p className="text-muted">Back to <a href="pages-login.html" className="text-dark ml-1"><b>Log in</b></a></p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}
export { RecoverPassword }
