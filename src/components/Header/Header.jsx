import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'

import { TodoContext } from '../../context/TodoContext'
import { ButtonTriangle } from '../ButtonTriangle/ButtonTriangle'
import { MenuName } from '../MenuName/MenuName'
import { onTodoNamesInString } from '../../utils/onTodoNamesInString'
import { onTodoIdSelected } from '../../utils/onTodoIdSelected'

import styles from './Header.module.scss'

export const Header = ({ isIconsVisible }) => {
    const { todos } = useContext(TodoContext)
    
    const [foundTodosInMenu, setFoundTodosInMenu] = useState([...todos])
    const [isMouseMoveToName, setMouseMoveToName] = useState(false)
    const [idSelected, setIdSelected] = useState([])
    const [isSearchName, setSearchName] = useState('')
    
    const refHeaderName = useRef()
    
    const onClickItem = useCallback((id) => {
        setIdSelected(preState => {
            const findId = preState.find(idSel => idSel === id)

            if (findId) {
                return preState.filter(idSel => idSel !== id)
            }
            return [...preState, id]
        })
    }, [])
    
    const onSearchName = useCallback((e) => {
        setSearchName(e.target.value)
        setFoundTodosInMenu(todos.filter(todo => todo.name.includes(e.target.value.trim())))
    }, [todos])
    
    const onSelectedAll = useCallback(() => {
        setIdSelected([])
        setSearchName('')
        setFoundTodosInMenu(todos)
    }, [todos])
    
    const setMouseMoveName = () => setMouseMoveToName(true)
    const setMouseLeaveName = () => setMouseMoveToName(false)

    const todosNameInString = onTodoNamesInString(idSelected, todos)

    useEffect(() => {
        setFoundTodosInMenu(todos)
        setSearchName('')

        if (!idSelected.length) return
        setIdSelected(preState => onTodoIdSelected(preState, todos))
    }, [todos, idSelected.length])

    useEffect(() => {
        if (isMouseMoveToName) {
            refHeaderName.current.focus()
        } else refHeaderName.current.blur()
    }, [isMouseMoveToName])

    return (
        <thead>
            <tr>
                <th>
                    Статус
                    {isIconsVisible && <ButtonTriangle />}
                    <input type="text" />
                </th>
                <th>
                    Товар
                    {isIconsVisible && <ButtonTriangle />}
                    <input type="text" />
                </th>
                <th>
                    ID
                    {isIconsVisible && <ButtonTriangle />}
                    <input type="text" />
                </th>
                <th onMouseEnter={setMouseMoveName} onMouseLeave={setMouseLeaveName} >
                    Название
                    {isIconsVisible && <ButtonTriangle />}
                    <input 
                        type="text" 
                        ref={refHeaderName} 
                        value={!isMouseMoveToName ? todosNameInString : isSearchName} 
                        onChange={onSearchName} 
                    />
                </th>
            </tr>
            {isMouseMoveToName &&
                <tr className={styles.modalWrapper} onMouseEnter={setMouseMoveName} onMouseLeave={setMouseLeaveName}>
                    <td>
                        <MenuName 
                            todos={foundTodosInMenu}
                            idSelected={idSelected}
                            onClickItem={onClickItem}
                            onSelectedAll={onSelectedAll}
                        />
                    </td>
                </tr>
            }
        </thead>
    )
}
