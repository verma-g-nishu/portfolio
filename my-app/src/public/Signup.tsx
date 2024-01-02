import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="login_main">

            <div className="login_inner row">
              
                <div className="right_sec col-lg-12">
                    <div className="login_form">

                        <h1>Sign Up</h1>
                        <label>Email</label>
                        <input type="email" placeholder='email' className='input_sec' />

                        <label>Mobile Number</label>
                        <input type="number" placeholder='number' className='input_sec' />

                        <label>Password</label>
                        <input type="password" placeholder='password' className='input_sec' />

                        <label>Confirm Password</label>
                        <input type="password" placeholder='password' className='input_sec' />

                        <div className='checkbox_style'>
                            <input type="checkbox" placeholder='remember' className='check' />
                            <label className='remember'>Remember me</label>
                        </div>
                        <div className="login">
                            <Link to="/" >Sign Up</Link>
                        </div>
                    </div></div>
            </div>
        </div>
    )
}

export default Signup