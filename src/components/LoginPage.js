import React, { useState } from 'react'
import './LoginPage.css'
import SignIn from './SignIn';

export default function LoginPage() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className="LoginScreen">

            <div className="background">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix-logo" />
                <button onClick={() => setSignIn(true)} className='signIn_button'>Sign In</button>
                <div className="login_gradient"></div>
                <div className="content">
                    {signIn ?
                        (<SignIn />)
                        :
                        (<>
                            <h1>Unlimited films, Tv Programmes and More. </h1>
                            <h2>Watch anywhere. Cancel at any time </h2>
                            <h3>Ready to Watch.Enter your email to create or restart your membership</h3>
                            <div className="login_input">
                                <form>
                                    <input type="email" placeholder='Email Address' />
                                    <button onClick={() => setSignIn(true)} className='input_button'>Get Started</button>
                                </form>
                            </div>
                        </>
                        )}

                </div>
            </div>

        </div>
    )
}
