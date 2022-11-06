import React from 'react'

export default function Login() {
  return (
    <div className='login'>
        <div className="login-wrapper">
            <div className="login-left">
            <img 
                className='login-logo'
                src='/img/logo.png' 
                alt='Logo de groupomania'/>
                <h3 className='login-desc'>Connect witd friends and the word around you on Groupomania</h3>
            </div>
            <div className="login-right">
                <div className="login-form">
                    <input
                        className='login-input'
                        placeholder='Email'
                        type='email'/>
                    <input
                        className='login-input'
                        placeholder='Password'
                        type='epassword'/>
                        <button className='login-button'>Log In</button>
                        <span className='login-forgot'>Forgot password ?</span>
                        <button className='login-register-button'>Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
