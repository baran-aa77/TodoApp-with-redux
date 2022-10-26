import { configureStore } from '@reduxjs/toolkit'
import Todoslice from './slice/Todoslice'

export const store = configureStore({
  reducer: {
    todo:Todoslice
  },
})