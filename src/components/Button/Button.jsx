import React from 'react'

import styles from './Button.module.scss'

export const Button = ({ icon, clickButton }) => {
    return (
        <div className={styles.wrapper} onClick={clickButton} >
            {icon}
        </div>
    )
}
