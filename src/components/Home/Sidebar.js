import React, {Component} from "react";
import '../../styles/Sidebar.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/js/dist/dropdown';


class Sidebar extends Component{
    render(){
        return(
            <div className="sidebar-main" style={{ height: '100vh'}}>
                <div className="sidebar-text" style={{width: '350px'}}>
                    <h1 className="textName">Welcome, User</h1>
                    <h2 className="semester">2nd Semester</h2> 
                    <h2 className="schoolyear">AY 2020-2021</h2>
                </div>
                
                {/* Profile and sign out menu */}

                <br/><br/><br/><br/><br/><br/>
                <div className="dropdown">
                    <a href="#" className="d-flex flex-row-reverse align-items-center text-decoration-none dropdown-toggle" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://static.overlay-tech.com/assets/a9db6e71-27fb-49ff-ba41-813870259896.svg" alt="" width="32" height="32" className="rounded-circle me-2"/>
                        <strong style={{fontFamily:'Archivo', color: '#008D85'}}>User McUsersson</strong>
                    </a>
                    <div className="dropdown-menu text-small shadow " aria-labelledby="dropdownUser2" >
                        <a className="dropdown-item align-items-center justify-content-center" href="/login" style={{fontFamily:'Archivo', color: '#008D85'}}>Sign out</a>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Sidebar