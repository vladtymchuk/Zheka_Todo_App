import React from "react";
import styles from './Container.module.css'

function Container() {
    return (
        <div className={styles.container}>
            <div className={styles.inputBox}>
                <input type="text" className={styles.input}/>
                <button className={`${styles.btn} ${styles.btnAdd}`}>+</button>
            </div>
            <div>
                <ul>

                </ul>
            </div>
        </div>
    );
}

export default Container;