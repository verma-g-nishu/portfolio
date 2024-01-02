import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import it_img from '../images/it_img.jpeg';
import { Link } from 'react-router-dom';
import Signup from './Signup';
const Login = () => {

  return (
    <div className="login_main">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>


      <div className="login_inner row">

        <div className="right_sec  col-lg-12">


          <div className="login_form">

            <h1>Login</h1>
            <label>Email</label>
            <input type="email" placeholder='email' className='input_sec' />
            <label>Password</label>
            <input type="password" placeholder='password' className='input_sec' />
            <div className='checkbox_style'>
              <input type="checkbox" placeholder='remember' className='check' />
              <label className='remember'>Remember me</label>
            </div>
            <div className="login">
              <Link to="/">Login</Link>
              <p>Don't have an account ? <Link to="/sign-up" className='sign'>Signup </Link></p>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Login