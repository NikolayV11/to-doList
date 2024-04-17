import { configureStore } from "@reduxjs/toolkit";
import themeApp from "./themeAppSlice";
import { useDispatch } from "react-redux";
export const store = configureStore({
  reducer: { themeApp },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Передаём все полученные типы в useAppDispatch и получаем костомный useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
