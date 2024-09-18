export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case '[ADD]':
            return [...state, action.payload]; // Agregar nuevo todo
        case '[DELETE]':
            return state.filter(todo => todo.id !== action.payload); // Eliminar todo por id
        case '[TOGGLE]':
            return state.map(todo => {
                if (todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
            })
        default:
            return state;
    }
}
