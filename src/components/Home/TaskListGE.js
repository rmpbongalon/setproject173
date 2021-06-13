import React, { useContext } from 'react'
import '../../styles/TaskList.css'
import GETaskContext from '../Contexts/GETaskContext'
import TaskCard from './TaskCard'

export default function TaskListGE(){

    const {GEtasks, setGETasks} = useContext(GETaskContext)

    return(
        <div className="task-list">
            <h1 id = "ge-eval">Elective Course Evaluation/s:</h1>
            <div className="cardContainer">
            {
                 GEtasks.map((t,index) => <TaskCard key={index} id={t.id} name={t.name} subject={t.subject} isDone={t.isDone} section={t.section} type="GE"></TaskCard>)
            }
            </div>
        </div>

    );
}