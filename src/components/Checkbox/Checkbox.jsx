import React from 'react'

import styles from './Checkbox.module.scss'

export const Checkbox = ({ checked, onChange}) => {
    return (
        <>
            <input type="checkbox" className={styles.checkbox} name="checkbox" checked={checked} onChange={onChange} />
            <label htmlFor="checkbox" className={styles.lable} onClick={onChange} />
        </>
    )
}
