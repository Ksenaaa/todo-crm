import React from 'react'
import cn from 'classnames'

import styles from './MenuName.module.scss'

export const MenuNameItem = ({ todo, onClickItem, isSelected }) => {
    const onClick = () => {
        onClickItem(todo.todoId)
    }

    return (
        <div className={cn(styles.item, isSelected && styles.select)} onClick={onClick} >
            {todo.name}
        </div>
    )
}
