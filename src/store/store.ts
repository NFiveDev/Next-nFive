import { configureStore } from '@reduxjs/toolkit'
import CourserReducer from './features/course';

const store = configureStore({
  reducer: {
    course: CourserReducer
  }
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

