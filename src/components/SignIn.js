
import React from 'react'
import './SignIn.css';
import { useRef } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';



export default function SignIn() {
    //useRef
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    //functions
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message);
        })
    };

    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message)
        })
    };

    return (
        <div className="SignIn">
            <div className="signIn_form">
                <form >
                    <h1>Sign In</h1>
                    <input ref={emailRef} type="email" placeholder='Email Address' />
                    <input ref={passwordRef} type="password" placeholder='Password' />
                    <button onClick={signIn} type='submit' className='signIn_btn'>Sign In</button>
                    <h4>
                        <span className='signUp_gray'>New to Netflix? </span>
                        <span onClick={register} className='signUp_link'> Sign Up now</span>
                    </h4>
                </form>
            </div>
        </div>
    )
}
