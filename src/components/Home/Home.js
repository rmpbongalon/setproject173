import React, {Component} from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../styles/Home.css';

import SideBar from "./Sidebar";
import TaskList from "./TaskList";
import TaskListGE from "./TaskListGE";

class Home extends Component{
    render(){
        return(
            <div className="home-main-div"style={{backgroundImage: `url("https://static.overlay-tech.com/assets/26585e5b-baf0-4fe7-9544-a87704893b4c.png")`, backgroundColor:'rgba(0, 141, 133, 0.06)'}}>
                <SideBar/>
                <div className="home-right">
                    <TaskList/>
                    <TaskListGE/>
                    {/* <TaskList/> */}
                </div>
            </div>
        );
    }
}

export default Home;