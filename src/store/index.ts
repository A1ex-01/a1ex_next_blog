import { configureStore } from '@reduxjs/toolkit'
import postStore from './post'
export const store = configureStore({
  reducer: {
    post: postStore
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
