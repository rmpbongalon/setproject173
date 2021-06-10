import React, {Component} from "react";
import '../css/Sidebar.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/js/dist/dropdown';


class Sidebar extends Component{
    render(){
        return(
            <div class="d-flex flex-column flex-shrink-0 p-3 bg-white " style={{width: '400px', height: '100vh'}}>
                <div class="m-auto text-right" style={{width: '350px'}}>
                    <p className="textName">Welcome, Rita</p>
                    <p className="semester">2nd Semester</p>
                    <p className="schoolyear">AY 2020-2021</p>
                </div>
                
                {/* Profile and sign out menu */}
                <div class="dropdown">
                    <a href="#" class="d-flex align-items-center justify-content-center text-decoration-none dropdown-toggle" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://static.overlay-tech.com/assets/a9db6e71-27fb-49ff-ba41-813870259896.svg" alt="" width="32" height="32" class="rounded-circle me-2"/>
                        <strong style={{fontFamily:'Archivo', color: '#008D85'}}>Rita Isabel Colina</strong>
                    </a>
                    <div class="dropdown-menu text-small shadow " aria-labelledby="dropdownUser2" >
                        <a class="dropdown-item align-items-center justify-content-center" href="#" style={{fontFamily:'Archivo', color: '#008D85'}}>Sign out</a>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Sidebar;