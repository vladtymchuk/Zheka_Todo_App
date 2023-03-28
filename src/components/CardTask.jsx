import React from 'react'

export const CardTask = (props) => {
    const {taskName, id, setTasks} = props

    const deleteHandler = () => {
        setTasks((prevTasks) => {
            return prevTasks.filter((task, index) => {
                return index !== id
            })
        })
        const tasksLS = JSON.parse(localStorage.getItem('tasks'))
            .filter((task, index) => index !== id)

        localStorage.setItem('tasks', JSON.stringify(tasksLS))
    }

    return (
        <>
            <li>
                <div >
                    <p>{taskName}</p>
                </div>
                <button onClick={deleteHandler}>X</button>
            </li>
        </>
    )
}