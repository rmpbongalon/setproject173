import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import EvalPage from './components/Form/EvalPage'
import Home from './components/Home/Home';
import LoginPage from "./components/Login/LoginPage"
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

require('react-dom');
window.React2 = require('react');
// console.log(window.React1 === window.React2);
const theme = createMuiTheme();

function App() {

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Route path ='/login'
                    render= {() => <LoginPage/>} />
                  
                    <Route path ='/evaluate'
                    component={EvalPage}/>

                    <Route path ='/home'
                    render={() => <Home/>} />



                    <Redirect exact from="/" to="/login" />
                    <Redirect to="/not-found" />
                </Switch>
            </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}
export default App;