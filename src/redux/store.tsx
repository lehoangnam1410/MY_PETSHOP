import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './couter/count.silde'
import changeLightReducer from './changeLight/changeLight.slide'
export const store = configureStore({
  reducer: {
    lehoangnam: counterReducer,
    changeLight: changeLightReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch