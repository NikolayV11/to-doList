import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ArrayTaskList, Task } from "../../types";

const initialState: Omit<ArrayTaskList, "status" | "id"> = {
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
    addTask: (state, action: PayloadAction<string>) => {
      const task: Task = {
        status: false,
        task: action.payload,
        id: state.listTask.length,
      };
      state.listTask.push(task);
    },
    // удаление задачи
    deleteTask: (state, action: PayloadAction<number>) => {
      state.listTask = state.listTask.filter((item) => {
        console.log(action.payload);
        if (item.id !== action.payload) {
          return item;
        }
      });

      state.listTask.map((item, index) => {
        item.id = index;
      });
    },
    // изменение статуса задачи
    changeTask: (state, action: PayloadAction<number>) => {
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
