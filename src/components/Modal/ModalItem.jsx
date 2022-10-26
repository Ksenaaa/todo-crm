import React from 'react'

import styles from './Modal.module.scss'

export const ModalItem = ({ img, todoImgId, onChange }) => {
    const handleClick = () => {
        onChange(img)
    }
    
    return (
        <div onClick={handleClick} className={todoImgId === img.id ? styles.modalItemActive : ''} >
            <img src={img.img} alt="logo" />
        </div>
    )
}
