import React from 'react'
import { useTodoStore } from '../store/todoStore'
import styles from './CardTask.module.css'

export const CardTask = ({todo}) => {
    const {title, id, done} = todo
    const {addTodo, removeTodo, doneTodo} = useTodoStore()

    
    const removeTodoHandler = () => {
        removeTodo(id)
    }

    const doneTodoHandler = () => {
        doneTodo(id)
    }

    return (
        <>
            <li className={styles.li}>
                <div className={styles.bodyTask}>
                    <div className={styles.inputBox}>
                        <input
                            className={styles.checkbox}
                            type="checkbox" name="done" id="done"
                            checked={done}
                            onChange={doneTodoHandler}
                        />
                    </div>
                    <div className={styles.taskDescription}>
                        <p className={styles.title}>{title}</p>
                    </div>
                    <button 
                        className={styles.deleteBtn}
                        onClick={removeTodoHandler}>
                            X
                    </button>
                </div>
            </li>
        </>
    )
}