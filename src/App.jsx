import React, { useState } from 'react'

import { Header } from './components/Header/Header';
import { TodoList } from './components/TodoList/TodoList';
import { Button } from './components/Button/Button';
import { TodoContext } from './context/TodoContext';
import { useTodos } from './hooks/todo.hook';
import { ReactComponent as PlusIcon } from './img/plus.svg'
import { ReactComponent as CrossIcon } from './img/cross.svg'

import styles from './App.module.scss';

export const App = () => {
  const [ isIconsVisible, setIconsVisible ] = useState(false)

  const setVisible = () => setIconsVisible(true)
  const setHidden = () => setIconsVisible(false)

  const { 
    todos, 
    addTodo, 
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
        <div className={styles.wrapperTable} onMouseEnter={setVisible} onMouseLeave={setHidden}>
          <table className={styles.table} >
              <Header isIconsVisible={isIconsVisible} />
              <TodoList isIconsVisible={isIconsVisible} />
          </table>
          <div className={styles.button}>
            <Button icon={<PlusIcon />} clickButton={addTodo} />
            {todosIdSelected.length ? <Button icon={<CrossIcon />} clickButton={deleteSelectedTodo} /> : null}
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  )
}
