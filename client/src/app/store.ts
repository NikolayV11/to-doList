import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import themeApp from "./themeAppSlice";
import newTask from "./savingTasksSlice";
import listTask from "./arrayTasks";

export const store = configureStore({
  reducer: { themeApp, newTask, listTask },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Передаём все полученные типы в useAppDispatch и получаем кастомный useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
