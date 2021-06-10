import React from 'react'
import '../../styles/TaskList.css'

const TaskList = () => {
    return(
        <div className="task-list">
            <h1 id="major-course-eval">Major Course Evaluation/s:</h1>

            <a href="/evaluate">
            <div className="task-rate" >
                {/* icon */}

                <div className="check-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#008D85" class="bi bi-check-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                    </svg>
                </div>

                <div className="task-text">
                    <h1>CMSC 128 Lecture</h1>
                    <h2 style={{fontWeight:"normal"}}>Section D</h2>
                    <h2>Reginald C. Recario</h2> 
                </div>

            </div>
            </a>

        </div>
    );
}

export default TaskList;