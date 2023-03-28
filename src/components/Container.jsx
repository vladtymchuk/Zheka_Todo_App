import React, { useEffect, useState } from "react";
import { CardTask } from "./CardTask";
import styles from './Container.module.css'

function Container() {
    const [taskName, setTaskName] = useState('')
    const [tasks, setTasks] = useState([])

    const clickHandler = () => {
        if (taskName === '') {
            alert('Please enter a task name')
        } else {
            setTasks([...tasks, taskName])
            localStorage.setItem('tasks', JSON.stringify([...tasks, taskName]))
            setTaskName('')
        }
    }

    useEffect(() => {
        const tasksLS = JSON.parse(localStorage.getItem('tasks'))
        if (tasksLS) {
            setTasks(tasksLS)
        }
    }, [])



    return (
        <div className={styles.container}>
            <div className={styles.inputBox}>
                <input 
                    type="text" 
                    className={styles.input}
                    value={taskName}
                    onChange={(event) => setTaskName(event.target.value)}
                />
                <button 
                    className={`${styles.btn} ${styles.btnAdd}`}
                    onClick={clickHandler}    
                >+</button>
            </div>
            <div>
                <h2>Tasks</h2>
                <ul>
                    {tasks ? tasks.map((task, index) => {
                        return (
                            <CardTask 
                                key={index} 
                                taskName={task} 
                                setTasks={setTasks}
                                id={index}/>
                        )
                    }) : null}
                </ul>
            </div>
        </div>
    );
}

export default Container;
