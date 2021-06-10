import React, {Component} from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/Home.css';

import SideBar from "./Sidebar";

class Home extends Component{
    render(){
        return(
            <div style={{backgroundImage: `url("https://static.overlay-tech.com/assets/26585e5b-baf0-4fe7-9544-a87704893b4c.png")`, backgroundColor:'rgba(0, 141, 133, 0.06)'}}>
                <SideBar/>
            </div>
        );
    }
}

export default Home;