import React from 'react' 
import './ConfirmModalStyle.css'
import TaskContext from '../Contexts/TaskContext'
import GETaskContext from '../Contexts/GETaskContext'
import {Link} from 'react-router-dom'
import { useContext } from 'react'

export default function ConfirmModal(props){
    const {tasks, setTasks} = useContext(TaskContext)
    const {GEtasks, setGETasks} = useContext(GETaskContext)


    if(!props.show) {
        return null
    }

    const markTask = () => {
        if(props.type === "MAJOR")
            tasks[props.id].isDone = "task-rate-done"
        else if(props.type === "GE")
            GEtasks[props.id].isDone = "task-rate-done"
    }

    return (
        <div className="modal-container">
            <div className="modal-content">
                <h3> Are you sure you want to submit? </h3>
            </div> 
            <div className="choices-content">
                <Link to="/home">
                    <button className="modalBtn" onClick={markTask}> Confirm </button>
                </Link>&nbsp;&nbsp;
                <button className="modalBtn"  onClick={props.onClose}> Cancel </button>
            </div>
        </div>
    )
}