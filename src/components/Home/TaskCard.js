import React from 'react'
import '../../styles/TaskList.css'
import { Link } from 'react-router-dom'

const TaskCard = (props) => {

    if(props.isDone === "task-rate") {
        return (
            <Link to={{pathname:"/evaluate", prof: {name: props.name, subject: props.subject, id: props.id, type: props.type}}}>
                    <a>
                    <div className={props.isDone}>
                        <div className="check-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#008D85" class="bi bi-check-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                            </svg>
                        </div>
    
                        <div className="task-text">
                            <h1>{props.subject}</h1>
                            <h2 style={{fontWeight:"normal"}}>{props.section}</h2>
                            <h2>{props.name}</h2> 
                        </div>
                    </div>
                    </a>
            </Link>
        )
    } else {
        return (
                <div className={props.isDone}>
                    <div className="check-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#008D85" class="bi bi-check-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                        </svg>
                    </div>
    
                    <div className="task-text">
                        <h1>{props.subject}</h1>
                        <h2 style={{fontWeight:"normal"}}>{props.section}</h2>
                        <h2>{props.name}</h2> 
                    </div>
                </div>
        )
    }

}


export default TaskCard