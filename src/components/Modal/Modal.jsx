import React from 'react'

import { imgs } from '../../constants/imgModal'
import { ModalItem } from './ModalItem'

import styles from './Modal.module.scss'

export const Modal = ({ onChange, todoImgId }) => {
    return (
        <div className={styles.wrapper}>
            {imgs.map(img => 
                <ModalItem 
                    key={img.id}
                    img={img}
                    todoImgId={todoImgId}
                    onChange={onChange}
                />
            )}
        </div>
    )
}
