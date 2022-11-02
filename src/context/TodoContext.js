import { createContext } from "react";

export const TodoContext = createContext({
    todos: [],
    todosIdSelected: [],
    addTodo: () => {}, 
    deleteTodo: (id) => {}, 
    changeTodo: (id, textId, textName) => {},
    changeTodoImg: (id, img) => {},
    selectedTodo: (id) => {},
    checkedTodo: (id) => {},
    deleteSelectedTodo: () => {},
})
