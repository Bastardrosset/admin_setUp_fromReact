import React from 'react'
import { useContext } from 'react';
import { useRef } from 'react';
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext';

export default function Login() {

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email.current.value);
        loginCall({email: email.current.value, password: password.current.value}, dispatch);
    };
    
  return (
    <div className='login'>
        <div className="login-wrapper">
            <div className="login-left">
            <img 
                className='login-logo'
                src= {publicFolder + `logo.png`}
                alt='Logo de groupomania'/>
                <h3 className='login-desc'>Connect witd friends and the word around you on Groupomania</h3>
            </div>
            <div className="login-right">
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        className='login-input'
                        placeholder='Email'
                        type='email'
                        ref={email}
                        required/>
                    <input
                        className='login-input'
                        placeholder='Password'
                        type='password'
                        minLength={6}
                        ref={password}
                        required/>
                        <button className='login-button'>{isFetching ? 'loading' : 'Log In'}</button>
                        <span className='login-forgot'>Forgot password ?</span>
                        <button className='login-register-button'>Create a New Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}
