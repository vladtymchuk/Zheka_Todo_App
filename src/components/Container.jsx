import React, { useEffect, useState } from "react";
import { CardTask } from "./CardTask";
import styles from './Container.module.css'
import { useTodoStore } from "../store/todoStore"

function Container() {
    const [taskName, setTaskName] = useState('')
    const [tasks, setTasks] = useState([])
    const {todos, addTodo} = useTodoStore();

    const addTodoHandler = () => {
        addTodo({
            id: Date.now(),
            title: taskName,
            done: false
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.inputBox}>
                <input 
                    type="text" 
                    className={styles.input}
                    placeholder="Add a task"
                    value={taskName}
                    onChange={(event) => setTaskName(event.target.value)}
                />
                <button 
                    className={`${styles.btn} ${styles.btnAdd}`}
                    onClick={addTodoHandler}    
                >+</button>
            </div>
            <div className={styles.taskBox}>
                <h2 className={styles.title}>Tasks</h2>
                <ul className={styles.taskList}>
                    {todos ? todos.map((todo) => {
                        return (
                            <CardTask 
                                key={todo.id} 
                                todo={todo}
                                id={todo.id}/>
                        )
                    }) : null}
                </ul>
            </div>
        </div>
    );
}

export default Container;
