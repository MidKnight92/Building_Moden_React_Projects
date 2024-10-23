import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        todoAdded(state, action) {
            state.push({
                id: Math.random(),
                text: action.payload.text,
                completed: false
            })
        },
        todoToggled(state, action){
            const todo = state.find(todo => todo.id === action.payload.id)
            todo.completed = !todo.completed
        },
        todoRemove(state, action){
            return state.filter(todo => todo.id !== action.payload.id)
        }
    }
})

export const { todoAdded, todoToggled, todoRemove } = todoSlice.actions
export default todoSlice.reducer