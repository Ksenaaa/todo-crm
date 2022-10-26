import React, { useState } from 'react'

import { Header } from './components/Header/Header';
import { TodoList } from './components/TodoList/TodoList';
import { Button } from './components/Button/Button';
import { TodoContext } from './context/TodoContext';
import { useTodos } from './hooks/todo.hook';

import styles from './App.module.scss';

export const App = () => {
  const [ isIconsVisible, setIconsVisible ] = useState(false)

  const setVisible = () => setIconsVisible(true)
  const setHidden = () => setIconsVisible(false)

  const { 
    todos, 
    addTodo, 
    isEditing, 
    checkedTodo, 
    todosIdSelected, 
    selectedTodo, 
    deleteTodo, 
    changeTodo, 
    changeTodoImg, 
    deleteSelectedTodo 
  } = useTodos()
  
  return (
    <TodoContext.Provider 
      value={{ 
        todos, 
        addTodo, 
        isEditing, 
        checkedTodo, 
        todosIdSelected, 
        selectedTodo, 
        deleteTodo, 
        changeTodo, 
        changeTodoImg, 
        deleteSelectedTodo
      }} 
    >
      <div className={styles.wrapper}>
        <div className={styles.wrapperTable} onMouseOver={setVisible} onMouseOut={setHidden}>
          <table className={styles.table} >
              <Header isIconsVisible={isIconsVisible} />
              <TodoList isIconsVisible={isIconsVisible} />
          </table>
        </div>
        <div className={styles.button}>
          <Button name='+' clickButton={addTodo} />
          {todosIdSelected.length ? <Button name='x' clickButton={deleteSelectedTodo} /> : null}
        </div>
      </div>
    </TodoContext.Provider>
  )
}
