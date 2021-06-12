import React, { useContext } from 'react'
import '../../styles/TaskList.css'
import GETaskContext from '../Contexts/GETaskContext'
import TaskCard from './TaskCard'

const TaskListGE = () => {

    const {GEtasks, setGETasks} = useContext(GETaskContext)

    return(
        <div className="task-list">
            <h1 id = "ge-eval">GE Course Evaluation/s:</h1>
            {
                 GEtasks.map(t => <TaskCard id={t.id} name={t.name} subject={t.subject} isDone={t.isDone} section={t.section} type="GE"></TaskCard>)
            }
        </div>

    );
}

export default TaskListGE;