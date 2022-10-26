import React, { createContext } from "react";

export const TodoContext = createContext({
    todos: [],
    isEditing: false,
    todosIdSelected: [],
    addTodo: () => {}, 
    deleteTodo: (id) => {}, 
    changeTodo: (id, textId, textName) => {},
    changeTodoImg: (id, img) => {},
    selectedTodo: (id) => {},
    checkedTodo: (id) => {},
    deleteSelectedTodo: () => {},
})
