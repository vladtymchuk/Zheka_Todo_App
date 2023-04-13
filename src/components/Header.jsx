import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header(props) {
    const {title} = props
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.menuBtns}>
          <Link className={styles.menuBtn} to='/'>All Tasks</Link>
          <Link className={styles.menuBtn} to='/done'>Done</Link>
          <Link className={styles.menuBtn} to='/notDone'>Not Done</Link>
        </div>
    </header>
  )
}
