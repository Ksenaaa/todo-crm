import React from 'react'

import styles from './Hint.module.scss'

export const Hint = ({ text }) => {
    return (
        <div className={styles.wrapper} >
            {text}
        </div>
    )
}
