import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import EvalPage from './components/Form/EvalPage'
import ConfirmModal from './components/Modal/ConfirmModal';
import Home from './components/Home/Home';

import LoginPage from "./components/Login/LoginPage"

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

function App() {

    return (
        <div className="App">
            
            <BrowserRouter>
                <Switch>
                    <Route path ='/login'
                    render= {() => <LoginPage/>} />

                    <Route path ='/evaluate'
                    render = {() => <EvalPage/>} />

                    <Route path ='/home'
                    render={() => <Home/>} />



                    <Redirect exact from="/" to="/login" />
                    <Redirect to="/not-found" />
                </Switch>
            </BrowserRouter>
        </div>
    );
}
export default App;