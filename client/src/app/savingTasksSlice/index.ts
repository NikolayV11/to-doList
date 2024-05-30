import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ArrayTaskList, Task } from "../../types";

const initialState: ArrayTaskList = {
  status: false,
  id: "",
  name: "",
  listTask: [],
};

export const creatingTasksSlice = createSlice({
  name: "creatingTasks",
  initialState,
  reducers: {
    // название списка задач
    addNameTaskList: (state, action) => {
      const name = action.payload.trim();
      if (name) {
        state.name = name;
        return;
      }
      state.name = "";
    },
    // добавление задачи
    addTask: (state, action: PayloadAction<{ task: string; id: string }>) => {
      const task: Task = {
        status: false,
        task: action.payload.task,
        id: action.payload.id,
      };
      state.listTask.push(task);
    },
    // удаление задачи
    deleteTask: (state, action: PayloadAction<string>) => {
      state.listTask = state.listTask.filter((item) => {
        if (item.id !== action.payload) {
          return item;
        }
      });
    },
    // изменение статуса задачи
    changeTask: (state, action: PayloadAction<string>) => {
      state.listTask.map((item) => {
        if (item.id === action.payload) {
          item.status = !item.status;
        }
      });
    },
    // отмена создание задачи
    cancelTaskCreation: (state) => {
      state.listTask = [];
      state.name = "";
    },
  },
});

export const { addNameTaskList, addTask, deleteTask, changeTask, cancelTaskCreation } =
  creatingTasksSlice.actions;

export default creatingTasksSlice.reducer;
