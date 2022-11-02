import React, { useCallback } from 'react'

import { MenuNameItem } from './MenuNameItem'

import styles from './MenuName.module.scss'

export const MenuName = ({ todos, onClickItem, onSelectedAll, idSelected }) => {
    const selected = useCallback((id) => {
        return idSelected.find(idSel => idSel === id)
    }, [idSelected])

    return (
        <div className={styles.wrapper} >
            <div className={styles.wrapperItems} >
                <div className={styles.item} onClick={onSelectedAll} >
                    Все
                </div>
                {todos.map(todo => 
                    <MenuNameItem 
                        key={todo.todoId}
                        todo={todo}
                        onClickItem={onClickItem}
                        isSelected={selected(todo.todoId)}
                    />
                )}
            </div>
        </div>
    )
}
