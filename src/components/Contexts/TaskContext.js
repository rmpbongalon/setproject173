import React, { useState } from 'react'
import TaskList from '../Home/TaskList'

const tasksList = [
    {
        id: 0,
        name: "Reginald C. Recario",
        subject: "CMSC 128 Lecture",
        isDone: "task-rate",
        section: "D"
    },
    {
        id: 1,
        name: "Kendal Jean G. Jaen",
        subject: "CMSC 128 Lab",
        isDone: "task-rate",
        section: "D-3L"
    },
    {
        id: 2,
        name: "Arian G. Jacildo",   
        subject: "CMSC 123 Lecture",
        isDone: "task-rate",
        section: "ST"
    },
    {
        id: 3,
        name: "Cristopher Claude C. Templado",   
        subject: "CMSC 123 Laboratory",
        isDone: "task-rate-done",
        section: "ST-2L"
    }
]

const TaskContext = React.createContext()

export const TaskProvider = ({children}) => {

    const [tasks, setTasks] = useState(tasksList)

    return(
        <TaskContext.Provider value={{tasks, setTasks}}>
        {children}
        </TaskContext.Provider>
    )
}

export default TaskContext