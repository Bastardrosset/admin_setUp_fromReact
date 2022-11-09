import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom";

export default function Register() {

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confPassword = useRef();
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (confPassword.current.value !== password.current.value) {
            confPassword.current.setCustomValidity("password don't match !")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
                await axios.post("auth/register", user);
                history.push('/login')

            } catch (error) {
                console.log(error)
            }
        }
    }

  return (
    <div className='register'>
        <div className="register-wrapper">
            <div className="register-left">
            <img 
                className='register-logo'
                src={publicFolder + `logo.png`} 
                alt='Logo de groupomania'/>
                <h3 className='register-desc'>Connect witd friends and the word around you on Groupomania</h3>
            </div>
            <div className="register-right">
                <form className="register-form" onSubmit={handleSubmit}>
                    <input
                        className='register-input'
                        placeholder='Username'
                        type='text'
                        ref={username}
                        required/>
                    <input
                        className='register-input'
                        placeholder='Email'
                        type='email'
                        ref={email}
                        required/>
                    <input
                        className='register-input'
                        placeholder='Password'
                        type='password'
                        ref={password}
                        required
                        minLength={6}/>
                    <input
                        className='register-input'
                        placeholder='Confirm-Password'
                        type='epassword'
                        ref={confPassword}
                        required/>
                    <button className='register-button'>Sign Up</button>
                    <button className='register-button'>Log Into Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}
