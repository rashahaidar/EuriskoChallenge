import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../features/userSlice'
import errorReducer from '../features/errorSlice'
import articleReducer from '../features/articleSlice'

export default configureStore({
  reducer: {
    user:userReducer,
    error: errorReducer,
    article:articleReducer
  },
})