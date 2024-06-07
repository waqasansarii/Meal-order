import { configureStore } from '@reduxjs/toolkit'
import mealReducer from './action/slice'

export const store = configureStore({
  reducer: {
    meal: mealReducer,
  },
})