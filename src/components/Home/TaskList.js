import React, { useContext } from 'react'
// import {Link} from 'react-router-dom'
import '../../styles/TaskList.css'
import TaskContext from '../Contexts/TaskContext'
import TaskCard from './TaskCard'

export default function TaskList(){

    const {tasks, setTasks} = useContext(TaskContext)

    return(
        <div className="task-list">
            <h1 id="major-course-eval">Major Course Evaluation/s:</h1>
            <div className="cardContainer">
            {
                tasks.map((t,index) => <TaskCard key={index} id={t.id} name={t.name} subject={t.subject} isDone={t.isDone} section={t.section} type="MAJOR"></TaskCard>)
            }
            </div>
        </div>
    );
}