import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import '../../styles/TaskList.css'
import TaskContext from '../Contexts/TaskContext'
import TaskCard from './TaskCard'

const TaskList = () => {

    const {tasks, setTasks} = useContext(TaskContext)

    return(
        <div className="task-list">
            <h1 id="major-course-eval">Major Course Evaluation/s:</h1>
            {
                tasks.map(t => <TaskCard id={t.id} name={t.name} subject={t.subject} isDone={t.isDone} section={t.section} type="MAJOR"></TaskCard>)
            }
        </div>
    );
}

export default TaskList;