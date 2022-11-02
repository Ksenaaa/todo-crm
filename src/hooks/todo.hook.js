import { useCallback, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { newTodo } from '../constants/newTodo'

export const useTodos = () => {
    const [todos, setTodo] = useState([])
    const [todosIdSelected, setTodosIdSelected] = useState([])

    const addTodo = useCallback(() => {
        setTodo(preState => ([{ ...newTodo, todoId: uuidv4() }, ...preState]))
    }, [])

    const selectedTodo = useCallback((id) => {
        setTodosIdSelected(preState => {
            const findId = preState.find(todoId => todoId === id)
            if (findId) return preState.filter(todoId => todoId !== id)
            return [...preState, id]
        })
    }, [])

    const deleteTodo = useCallback((id) => {
        setTodo(preState => preState.filter(todo => todo.todoId !== id))
    }, [])

    const deleteSelectedTodo = useCallback(() => {
        return todosIdSelected.forEach(todoIdSel => {
            setTodo(preState => preState.filter(todo => todo.todoId !== todoIdSel))
            setTodosIdSelected([])
        })
    }, [todosIdSelected])

    const changeTodoImg = useCallback((id, img) => {
        setTodo(preState => preState.map(todo => {
            if (todo.todoId === id) return { ...todo, img }
            return todo
        }))
    }, [])

    const changeTodo = useCallback((id, textId, textName) => {
        setTodo(preState => preState.map(todo => {
            if (todo.todoId === id) return { ...todo, id: textId, name: textName }
            return todo
        }))
    }, [])

    const checkedTodo = useCallback((id) => {
        setTodosIdSelected(preState => {
            const findId = preState.find(todoId => todoId === id)
            if (findId) return preState.filter(todoId => todoId !== id)
            return preState
        })
        setTodo(preState => preState.map(todo => {
            if (todo.todoId === id) return { ...todo, status: !todo.status }
            return todo
        }))
    }, [])

    return { 
        todos, 
        addTodo, 
        todosIdSelected, 
        checkedTodo, 
        selectedTodo, 
        deleteTodo, 
        changeTodo, 
        changeTodoImg, 
        deleteSelectedTodo 
    }
}
