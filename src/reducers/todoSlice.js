import { createSlice, nanoid } from "@reduxjs/toolkit";



const initialState = {
    todos: [
        {
            id: 1,
            title: "First todo",
            completed: false
        }

    ]
}
export const todoSlice = createSlice({
    initialState,
    name: "todos",
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload)
            const item = {
                id: nanoid(),
                title: action.payload,
            }
            state.todos.push(item);

        },
        updateTodo: (state, action) => {
            state.todos[action.payload.id] = action.payload;




        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        }

    }
});
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;