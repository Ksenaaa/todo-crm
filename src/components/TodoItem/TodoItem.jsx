import React, { useCallback, useRef, useState } from 'react'
import cn from 'classnames'

import { Modal } from '../Modal/Modal'
import { useToggle } from '../../hooks/toggle.hook'
import { Checkbox } from '../Checkbox/Checkbox'
import { Hint } from '../Hint/Hint'

import styles from './TodoItem.module.scss'

export const TodoItem = ({ 
    todo, 
    deleteTodo, 
    checkedTodo, 
    selectedTodo, 
    selected, 
    changeTodo, 
    changeTodoImg, 
    isIconsVisible 
}) => {
    const { isOpen: isOpenModal, onToggle: toggleOpenModal } = useToggle()
    const { isOpen: isMouseMoveToDelete, onToggle: toggleIsMouseMoveToDelete } = useToggle()
    
    const [isMouseMoveToTr, setMouseMoveToTr] = useState(false)
    const [textId, setTextId] = useState('')
    const [textName, setTextName] = useState('')

    const setMouseMoveTr = () => setMouseMoveToTr(true)
    const setMouseLeaveTr = () => setMouseMoveToTr(false)
  
    const refName = useRef()
  
    const onOpenModal = (e) => {
        if (todo.status) return
        e.stopPropagation()
        toggleOpenModal()
    }

    const onCloseModal = (e) => {
        e.stopPropagation()
        toggleOpenModal()
    }

    const onChangeImg = useCallback((img) => {
        if (todo.status) return
        changeTodoImg(todo.todoId, img)
    }, [changeTodoImg, todo.todoId, todo.status])

    const onChangeTextId = (e) => {
        if (todo.status) return
        setTextId(e.target.value)
        changeTodo(todo.todoId, e.target.value, textName)
    }

    const onKeyEnterId = (e) => {
        if (e.keyCode === 13) {
            refName.current.focus()
        }
    }

    const onChangeTextName = (e) => {
        if (todo.status) return
        setTextName(e.target.value)
        changeTodo(todo.todoId, textId, e.target.value)
    }

    const onKeyEnterName = (e) => {
        if (e.keyCode === 13) {
            refName.current.blur()
        }
    }

    const onCheck = (e) => {
        e.stopPropagation()
        checkedTodo(todo.todoId)
    }
    
    const onSelect = () => {
        if (todo.status) return
        selectedTodo(todo.todoId)
    }

    const onDeleteTodo = (e) => {
        if (todo.status) return
        e.stopPropagation()
        deleteTodo(todo.todoId)
    }

    return (
        <>
            <tr className={cn(styles.wrapper, 
                    selected && styles.select, 
                    isMouseMoveToDelete && !todo.status && styles.preDelete, 
                    isMouseMoveToTr && !todo.status && !selected && styles.selectTrMouseMove
                )} 
                onClick={onSelect}
                onMouseEnter={setMouseMoveTr} 
                onMouseLeave={setMouseLeaveTr}
            >
                <td>
                    <Checkbox checked={todo.status} onChange={onCheck}/>
                </td>
                <td>
                    {todo.article}
                </td>
                <td>
                    <input 
                        type="text" 
                        onChange={onChangeTextId} 
                        value={textId || todo.id} 
                        maxLength={3} 
                        onKeyDown={onKeyEnterId} 
                        autoFocus
                    />
                </td>
                <td className={styles.name}>
                    <img src={todo.img.img} alt="logo" />
                    <input 
                        type="text" 
                        ref={refName} 
                        onChange={onChangeTextName} 
                        value={textName || todo.name} 
                        onKeyDown={onKeyEnterName} 
                        onClick={onOpenModal} 
                    />
                </td>
                <td onMouseEnter={toggleIsMouseMoveToDelete} onMouseLeave={toggleIsMouseMoveToDelete}>
                    {isIconsVisible && 
                        <div className={styles.deleteTodo} onClick={onDeleteTodo}>
                            X
                            {isMouseMoveToDelete && !todo.status && <Hint text='Удалить строку' />}
                        </div>
                    }
                </td>
            </tr>
            {isOpenModal &&
                <tr className={styles.modalWrapper}>
                    <td>
                        <Modal onChange={onChangeImg} todoImgId={todo.img.id} />
                        <div onClick={onCloseModal} className={styles.closeModal} />
                    </td>
                </tr>
            }
        </>
    )
}
