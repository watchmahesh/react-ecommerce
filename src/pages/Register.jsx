import React from 'react'
import Layout from '../components/Layout'

const Register = () => {
  return (
    <Layout>

    <div className="breadcrumb-area">
    <div className="container">
        <div className="breadcrumb-content">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li className="active">Login</li>
            </ul>
        </div>
    </div>
</div>

<div className="page-section mb-60">
    <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
                <form action="#">
                    <div className="login-form">
                        <h4 className="login-title">Register</h4>
                        <div className="row">
                            <div className="col-md-6 col-12 mb-20">
                                <label>First Name</label>
                                <input className="mb-0" type="text" placeholder="First Name"/>
                            </div>
                            <div className="col-md-6 col-12 mb-20">
                                <label>Last Name</label>
                                <input className="mb-0" type="text" placeholder="Last Name"/>
                            </div>
                            <div className="col-md-12 mb-20">
                                <label>Email Address*</label>
                                <input className="mb-0" type="email" placeholder="Email Address"/>
                            </div>
                            <div className="col-md-6 mb-20">
                                <label>Password</label>
                                <input className="mb-0" type="password" placeholder="Password"/>
                            </div>
                            <div className="col-md-6 mb-20">
                                <label>Confirm Password</label>
                                <input className="mb-0" type="password" placeholder="Confirm Password"/>
                            </div>
                            <div className="col-12">
                                <button className="register-button mt-0">Register</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</Layout>
  )
}

export default Register