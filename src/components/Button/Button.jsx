import React from 'react'

import styles from './Button.module.scss'

export const Button = ({ name, clickButton }) => {
    return (
        <div className={styles.wrapper} onClick={clickButton} >
            {name}
        </div>
    )
}
