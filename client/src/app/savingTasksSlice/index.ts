import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ArrayTaskList, Task } from "../../types";

const initialState: Omit<ArrayTaskList, "status" | "id"> = {
  name: "",
  listTask: [
    { status: false, id: 0, task: "focus" },
    { status: true, id: 1, task: "Ron" },
  ],
};

export const creatingTasksSlice = createSlice({
  name: "creatingTasks",
  initialState,
  reducers: {
    addNameTaskList: (state, action) => {
      state.name = action.payload;
    },
    addTask: (state, action: PayloadAction<string>) => {
      const task: Task = {
        status: false,
        task: action.payload,
        id: state.listTask.length,
      };
      state.listTask.push(task);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.listTask = state.listTask.filter((item, index) => {
        console.log(action.payload);
        if (item.id !== action.payload) {
          return item;
        }
      });

      state.listTask.map((item, index) => {
        item.id = index;
      });
    },
    changeTask: (state, action: PayloadAction<number>) => {
      state.listTask.map((item) => {
        if (item.id === action.payload) {
          item.status = !item.status;
        }
      });
    },
  },
});

export const { addNameTaskList, addTask, deleteTask, changeTask } = creatingTasksSlice.actions;

export default creatingTasksSlice.reducer;
