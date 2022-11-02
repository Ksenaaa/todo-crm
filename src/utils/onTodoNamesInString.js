export const onTodoNamesInString = (todoIds, todos) => 
    todoIds.map(id => {
        const todo = todos.find(todo => id === todo.todoId)
        if (todo) return todo.name
        return ''
    }).join(', ')
