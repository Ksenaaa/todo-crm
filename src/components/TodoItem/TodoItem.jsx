import React, { useCallback, useEffect, useRef, useState } from 'react'
import cn from 'classnames'

import { Modal } from '../Modal/Modal'
import { useToggle } from '../../hooks/toggle.hook'
import { Checkbox } from '../Checkbox/Checkbox'

import styles from './TodoItem.module.scss'

export const TodoItem = ({ todo, deleteTodo, isEditing, checkedTodo, selectedTodo, selected, changeTodo, changeTodoImg, isIconsVisible }) => {
    const { isOpen: isOpenModal, onToggle: toggleOpenModal } = useToggle()
    const { isOpen: isMouseMoveToDelete, onToggle: toggleIsMouseMoveToDelete } = useToggle()
    
    const [textId, setTextId] = useState('')
    const [textName, setTextName] = useState('')

    const refId = useRef()
    const refName = useRef()

    useEffect(() => {
        if (isEditing) {
            refId.current.focus();
        }
    }, [isEditing])
  

    const onOpenModal = (e) => {
        if (todo.status) return
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
    }

    const onChangeTextName = (e) => {
        if (todo.status) return
        setTextName(e.target.value)
    }

    const onKeyEnterId = (e) => {
        if (e.keyCode === 13) {
            refName.current.focus()
        }
    }

    const onKeyEnterName = (e) => {
        if (e.keyCode === 13) {
            changeTodo(todo.todoId, textId, textName)
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
            <tr className={cn(styles.wrapper, selected && styles.select, isMouseMoveToDelete && styles.preDelete)} onClick={onSelect}>
                <td>
                    <Checkbox checked={todo.status} onChange={onCheck}/>
                </td>
                <td>
                    {todo.article}
                </td>
                <td>
                    <input type="text" ref={refId} onChange={onChangeTextId} value={textId || todo.id} maxLength={3} onKeyDown={onKeyEnterId} />
                </td>
                <td className={styles.name}>
                    <img src={todo.img.img} alt="logo" />
                    <input type="text" ref={refName} onChange={onChangeTextName} value={textName || todo.name} onKeyDown={onKeyEnterName} onClick={onOpenModal} />
                </td>
                <td onMouseOver={toggleIsMouseMoveToDelete} onMouseOut={toggleIsMouseMoveToDelete}>
                    {isIconsVisible && <div className={styles.deleteTodo} onClick={onDeleteTodo}>X</div>}
                </td>
            </tr>
            {isOpenModal &&
                <tr className={styles.modalWrapper}>
                    <Modal onChange={onChangeImg} todoImgId={todo.img.id} />
                    <div onClick={toggleOpenModal} className={styles.closeModal} />
                </tr>
            }
        </>
    )
}
