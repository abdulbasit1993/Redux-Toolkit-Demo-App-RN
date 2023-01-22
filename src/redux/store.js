import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./slices/userPostSlice";

export default configureStore({
    reducer: {
        post: PostReducer
    }
})