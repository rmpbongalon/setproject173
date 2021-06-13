import React from 'react';
import "../../styles/loginPage.css"
import upicon from "../../assets/up-logo.png"
// import uplbg from "../../assets/cropped-uplb-bg.png"

export default function LoginPage(){
    return(
        <div className = "login-main-container">

            <div className = "middle-container">

                <div className = "login-header">
                    <img src={upicon} alt="UP Logo" id="uplogo"/>
                    <h1>University of the Philippines</h1>
                    <h2>SET Portal</h2>
                </div>

                <a href = "/home">
                    <button className="sais-sign-in"> Sign in with SAIS</button>
                </a>

                <h3 id ="or-sign-in">or Sign In with UP Mail:</h3>

                <div className ="creds-fields">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email"
                        placeholder="example@up.edu.ph"
                        className="sign-in-fields"/>
                </div>

                <div className ="creds-fields">
                    <label htmlFor="email">Password</label>
                    <input 
                        type="password"
                        placeholder="password"
                        className="sign-in-fields"/>
                </div>

                {/* TO-DO: Add link to */}
                <p id="forgot-password">Forgot password?</p>

                <a href = "/home">
                    <button className="login-button">
                        Log in
                    </button>
                </a>
                
            </div>

        </div>
    );
}