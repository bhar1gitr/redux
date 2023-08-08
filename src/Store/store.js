import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/counters'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})