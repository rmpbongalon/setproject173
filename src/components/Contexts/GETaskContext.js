import React, { useState } from 'react'


const tasksList = [
    {
        id: 0,
        name: "Rosario Baria",
        subject: "Wika 1",
        isDone: "task-rate", // isDone values are based on the css style: task-rate when not yet done, task-rate-done when done
        section: "W1"
    },
    {
        id: 1,
        name: "Eileen Meneses",
        subject: "Comm 10",
        isDone: "task-rate", 
        section: "Y2"
    },
    {
        id: 2,
        name: "Ben Paul dela Cruz",
        subject: "Math 10",
        isDone: "task-rate",
        section: "B1"
    },
    {
        id: 3,
        name: "Quan Phan",
        subject: "HK12 Tai Chi Chuan",
        isDone: "task-rate", 
        section: "AB12"
    },

]

const GETaskContext = React.createContext()

export const GETaskProvider = ({children}) => {

    const [GEtasks, setGETasks] = useState(tasksList)

    return(
        <GETaskContext.Provider value={{GEtasks, setGETasks}}>
        {children}
        </GETaskContext.Provider>
    )
}

export default GETaskContext