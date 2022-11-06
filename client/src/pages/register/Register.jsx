import React from 'react'

export default function Register() {
  return (
    <div className='register'>
        <div className="register-wrapper">
            <div className="register-left">
            <img 
                className='register-logo'
                src='/img/logo.png' 
                alt='Logo de groupomania'/>
                <h3 className='register-desc'>Connect witd friends and the word around you on Groupomania</h3>
            </div>
            <div className="register-right">
                <div className="register-form">
                    <input
                        className='register-input'
                        placeholder='Username'
                        type='text'/>
                    <input
                        className='register-input'
                        placeholder='Email'
                        type='email'/>
                    <input
                        className='register-input'
                        placeholder='Password'
                        type='password'/>
                    <input
                        className='register-input'
                        placeholder='Confirm-Password'
                        type='epassword'/>
                        <button className='register-button'>Sign Up</button>
                        <button className='register-button'>Log Into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
