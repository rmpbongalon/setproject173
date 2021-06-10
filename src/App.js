import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import './App.css';

import LoginPage from "./components/login/loginPage"

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

function App() {

    return (
        <div className="App">
            
            <BrowserRouter>
                <Switch>
                    <Route path ='/home'
                    render= {() => <LoginPage/>}
                    />

                    <Redirect exact from="/" to="/home" />
                    <Redirect to="/not-found" />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
