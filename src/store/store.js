import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../reducers/todoSlice";


// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
    reducer: {
        todo: todoSlice.reducer,
        // Add your reducers here
    }
});
