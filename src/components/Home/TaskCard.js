import React from 'react'
import '../../styles/TaskList.css'
import { Link } from 'react-router-dom'

export default function TaskCard(props){

    if(props.isDone === "task-rate") {
        return (
            <Link to={{pathname:"/evaluate", prof: {name: props.name, subject: props.subject, id: props.id, type: props.type}}}>
                <div className={props.isDone}>
                    <div className="check-icon">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="16" height="16" stroke="#008D85" strokeOpacity="0.56" strokeWidth="2"/>
                        </svg>
                    </div>

                    <div className="task-text">
                        <h1 className="subject">{props.subject}</h1>
                        <h2 className="section">{props.section}</h2>
                        <h2 className="prof">{props.name}</h2> 
                    </div>
                </div>
            </Link>
        )
    } else {
        return (
                <div className={props.isDone}>
                    <div className="check-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#D3D3D3"/>
                        </svg>
                    </div>
    
                    <div className="task-text">
                        <h1 className="subject">{props.subject}</h1>
                        <h2 className="section">{props.section}</h2>
                        <h2 className="prof">{props.name}</h2> 
                    </div>
                </div>
        )
    }

}