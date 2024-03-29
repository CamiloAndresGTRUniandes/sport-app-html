import { configureStore } from '@reduxjs/toolkit';
import { sessionUserSlice } from './sessionUser';
export const store = configureStore({
  reducer: {
    sessionUser: sessionUserSlice.reducer
  }
})