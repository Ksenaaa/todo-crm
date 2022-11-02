import React, { useContext } from 'react'

import { TodoContext } from '../../context/TodoContext'
import { TodoItem } from '../TodoItem/TodoItem'

import styles from './TodoList.module.scss'

export const TodoList = ({ isIconsVisible }) => {
    const { 
        todos, 
        deleteTodo, 
        checkedTodo, 
        selectedTodo, 
        todosIdSelected, 
        changeTodo, 
        changeTodoImg 
    } = useContext(TodoContext)

    return (
        <tbody className={styles.wrapper}>
            {todos.map(todo => 
                <TodoItem 
                    selected={todosIdSelected.find(todoId => todoId === todo.todoId)}
                    todo={todo}
                    key={todo.todoId}
                    deleteTodo={deleteTodo}
                    selectedTodo={selectedTodo}
                    changeTodo={changeTodo}
                    changeTodoImg={changeTodoImg}
                    checkedTodo={checkedTodo}
                    isIconsVisible={isIconsVisible}
                />
            )}
        </tbody>
    )
}
