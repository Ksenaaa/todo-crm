export const onTodoIdSelected = (todoIds, todos) =>
    todoIds.filter(id => {
        const todo = todos.find(todo => id === todo.todoId)
        return todo && id
    })
