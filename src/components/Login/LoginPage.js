import React from 'react';
import "../../styles/loginPage.css"
import upicon from "../../assets/up-logo.png"
// import uplbg from "../../assets/cropped-uplb-bg.png"

const LoginPage = () => {
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

                <a href = "/home">
                    <button className="login-button">
                        Sign In with UP Mail
                    </button>
                </a>
                
            </div>

        </div>
    );
}

export default LoginPage;