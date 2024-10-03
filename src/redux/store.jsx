import { configureStore } from '@reduxjs/toolkit'

import todoSlice  from './slices/todoSlice'
import  selectedTodo  from './slices/selectedTodo'
import  loaderSlice  from './slices/loader'

export const store = configureStore({
    reducer: {
    
        Todos : todoSlice,
        Selected : selectedTodo,
        loader : loaderSlice
    },
  })