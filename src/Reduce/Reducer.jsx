export const initialState = {
    todos: []
}
export const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'del':
            return {
                ...state,
                todos: [...state.todos.filter(item => item.id !== action.payload)]
            }
        case 'set':
            return {
                ...state,
                todos: action.payload
            }
        case 'changeStatus':

            return {
                ...state,
                todos: state.todos.map((task) =>
                    task.id === action.payload.id
                        ? { ...task, status: !task.status }
                        : task
                )
            }
            case 'edit':
                return {
                  ...state,
                  todos: state.todos.map(task =>
                    task.id === action.payload.id ? { ...task, title: action.payload.newTitle,description:action.payload.newDescription} : task
                  ),
                }
        default:
            return {
                state
            }
    }
}