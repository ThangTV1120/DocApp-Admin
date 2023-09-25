import React from 'react'
import { Button, Form } from 'react-bootstrap';
import * as formik from 'formik';
import { AuthValidation } from '../../../validation/auth';
import logo from "../../../assets/images/logo-dark.png"
import logo_light from "../../../assets/images/logo-light.png"

const Logout = () => {
    return (

        <div className="account-pages mt-5 mb-5 authentication-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-4">

                        <div className="card bg-pattern">
                            <div className="card-body p-4">
                                <div className="text-center w-75 m-auto">
                                    <div className="auth-logo">
                                        <a href="index.html" className="logo logo-dark text-center">
                                            <span className="logo-lg">
                                                <img src={logo} alt="" height="22" />
                                            </span>
                                        </a>

                                        <a href="index.html" className="logo logo-light text-center">
                                            <span className="logo-lg">
                                                <img src={logo_light} alt="" height="22" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="mt-4">
                                        <div className="logout-checkmark">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                                <circle className="path circle" fill="none" stroke="#4bd396" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                                                <polyline className="path check" fill="none" stroke="#4bd396" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                                            </svg>
                                        </div>
                                    </div>

                                    <h3>See you again !</h3>

                                    <p className="text-muted"> You are now successfully sign out. </p>
                                </div>

                            </div>
                        </div>


                        <div className="row mt-3">
                            <div className="col-12 text-center">
                                <p className="text-muted">Back to <a href="auth-login.html" className="text-dark ms-1"><b>Sign In</b></a></p>
                            </div> 
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
export { Logout }