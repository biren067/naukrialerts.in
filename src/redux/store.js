import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '@/redux/reducer/themeSlice'
import usersReducer from '@/redux/reducer/usersSlice'
import postReducer  from './reducer/jobPostSlice'


export const store = configureStore({
  reducer: {
    theme:themeReducer,
    users:usersReducer,
    jobpost:postReducer,
  },
})