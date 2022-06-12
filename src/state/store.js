import { configureStore } from "@reduxjs/toolkit";
import tagReducer from './tagSlice'

export default configureStore({
    reducer: {
        tags: tagReducer,
    }
})
