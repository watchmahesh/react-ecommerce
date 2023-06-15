/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Link,useNavigate } from 'react-router-dom';
import { getData } from '../services/api.service';
import { login, setToken } from '../services/auth.service';
import { getLocalStorageData, setLocalStorage } from '../services//localhandler.service';
import { TOAST_CONFIG } from '../contants/custom';

import { API_ROUTES } from '../contants/apiRoutes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = ({ onLogin }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await login(email, password);
            const data = response.data;
            setToken(data)
            let user = getLocalStorageData("user");
            if (response) {
                const responseUser = await getData(API_ROUTES.get_current_user);
                if (responseUser.status === 200 && !user) {
                    user = responseUser.data;
                    setLocalStorage("user", JSON.stringify(user));
                }
            }
            onLogin();
          navigate('/')

        } catch (e) {
            toast.error(e.response.data.errors[0].detail,TOAST_CONFIG);

        }
    }




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
                        <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
                            <form action="#" onSubmit={handleSubmit} >
                                <div className="login-form">
                                    <h4 className="login-title">Login</h4>
                                    <div className="row">
                                        <div className="col-md-12 col-12 mb-20">
                                            <label>Email Address*</label>
                                            <input className="mb-0" value={email} type="email" onChange={handleEmail} placeholder="Email Address" />
                                        </div>
                                        <div className="col-12 mb-20">
                                            <label>Password</label>
                                            <input className="mb-0" value={password} type="password" onChange={handlePassword} placeholder="Password" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="check-box d-inline-block ml-0 ml-md-2 mt-10">
                                                <input type="checkbox" id="remember_me" />
                                                <label htmlFor="remember_me">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-10 mb-20 text-left text-md-right">
                                            <Link to="/register"> Forgotten pasward?</Link>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="register-button mt-0">Login</button>
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

export default Login