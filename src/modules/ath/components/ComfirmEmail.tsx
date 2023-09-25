import React from 'react'
import { Button, Form } from 'react-bootstrap';
import * as formik from 'formik';
import { AuthValidation } from '../../../validation/auth';
import logo from "../../../assets/images/logo-dark.png"
import logoComfirmEmail from "../../../assets/images/mail_confirm.png"
const ComfirmEmail = () => {
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
                        <div className="card text-center">
                            <div className="card-body p-4">
                            <div className="mb-4">
                                    <h4 className="text-uppercase mt-0">Confirm Email</h4>
                                </div>
                                <img src={logoComfirmEmail} alt="img" width="86" className="mx-auto d-block" />
                                <p className="text-muted font-15 mt-2"> A email has been send to <b>youremail@domain.com</b>.
                                    Please check for an email from company and click on the included link to
                                    reset your password. </p>

                                <a href="index.html" className="btn d-block btn-pink waves-effect waves-light mt-3">Back to Home</a>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>

    )
}
export { ComfirmEmail }
