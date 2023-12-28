import React from 'react'
import styles from './pagenotfound.module.css'

const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Oops!</h1>
            <p className={styles.text}>The page you're looking for doesn't exist.</p>
        </div>
    )
}

export default PageNotFound