import React, {useState} from "react";
import TaskList from "./TaskList";
import TaskListGE from "./TaskListGE";
import '../../styles/Home.css';

export default function Home(){
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu);
    };

    return(
        <div className="homeMainCont" style={homeMainStyle}>
            <div className="homeLeft" style={homeLeftStyle}>
                <div>
                <p className="textName">Welcome, User</p>
                <p className="semester">2nd Semester</p> 
                <p className="schoolyear">AY 2020-2021</p>
                </div>
                <div className="dropdown">
                    {showMenu ?
                        <div className="signout">
                            <a href="/login">Sign out</a>
                        </div>
                        : null
                    }

                    <button className="profileBttn" onClick={toggleMenu}>
                        <svg width="3rem" height="3rem" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM17.675 45.7C18.75 43.45 25.3 41.25 30 41.25C34.7 41.25 41.275 43.45 42.325 45.7C38.925 48.4 34.65 50 30 50C25.35 50 21.075 48.4 17.675 45.7ZM45.9 42.075C42.325 37.725 33.65 36.25 30 36.25C26.35 36.25 17.675 37.725 14.1 42.075C11.55 38.725 10 34.55 10 30C10 18.975 18.975 10 30 10C41.025 10 50 18.975 50 30C50 34.55 48.45 38.725 45.9 42.075ZM30 15C25.15 15 21.25 18.9 21.25 23.75C21.25 28.6 25.15 32.5 30 32.5C34.85 32.5 38.75 28.6 38.75 23.75C38.75 18.9 34.85 15 30 15ZM30 27.5C27.925 27.5 26.25 25.825 26.25 23.75C26.25 21.675 27.925 20 30 20C32.075 20 33.75 21.675 33.75 23.75C33.75 25.825 32.075 27.5 30 27.5Z" fill="#008D85"/>
                        </svg>

                        <strong>User McUsersson</strong>

                        <svg className="threeDot" width="2.2rem" height="2.2rem" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 15C7.35 15 6 16.35 6 18C6 19.65 7.35 21 9 21C10.65 21 12 19.65 12 18C12 16.35 10.65 15 9 15ZM27 15C25.35 15 24 16.35 24 18C24 19.65 25.35 21 27 21C28.65 21 30 19.65 30 18C30 16.35 28.65 15 27 15ZM18 15C16.35 15 15 16.35 15 18C15 19.65 16.35 21 18 21C19.65 21 21 19.65 21 18C21 16.35 19.65 15 18 15Z" fill="#008D85"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="homeRight" style={homeRightStyle}>
                <TaskList/>
                <TaskListGE/>
            </div>
        </div>
    );
}

const homeMainStyle = {
    width: "100vw",
    minHeight:"100vh",
    display: "flex",
    flexDirection: "row",
    backgroundImage: `url("https://static.overlay-tech.com/assets/26585e5b-baf0-4fe7-9544-a87704893b4c.png")`,
    overflowX: "hidden"
}

const homeLeftStyle = {
    width: "28vw",
    height: "100vh",
    paddingTop: "23vh",
    paddingRight: "3vw",
    textAlign: "right"
}

const homeRightStyle = {
    width: "72vw",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    background: "rgba(0, 141, 133, 0.06)",
    justifyContent: "space-evenly"
}