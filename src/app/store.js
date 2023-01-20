import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user.slice'
import postReducer from '../features/post.slice'

export default configureStore({
    reducer: {
        user: userReducer,
        posts: postReducer
    },
})