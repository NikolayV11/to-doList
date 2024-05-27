import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ArrayTaskList } from "../../types";

const initialState: ArrayTaskList[] = [];

export const arrayTasksSlice = createSlice({
  name: "arrayTasks",
  initialState,
  reducers: {
    // добавляем список задач в массив
    addToDoTask: (state, action: PayloadAction<ArrayTaskList>) => {
      state.push(action.payload);
    },
    // удаляем список задач из массива
    deleteToDoTask: (state, action: PayloadAction<number>) => {
      const list = state.filter((item) => {
        if (item.id !== action.payload) {
          return item;
        }
      });

      list.map((item, index) => {
        item.id = index;
      });

      state = list;
    },
    // изменяет статус списка задач если весь список выполнен
    taskListStatus: (state, action: PayloadAction<number>) => {
      state.map((item) => {
        if (item.id === action.payload) {
          item.status = !item.status;
        }
      });
    },
    // изменяет статус задачи из списка
    taskStatus: (state, action: PayloadAction<number[]>) => {
      state.map((item) => {
        if (item.id === action.payload[0]) {
          item.listTask[action.payload[1]].status = !item.listTask[action.payload[1]].status;
        }
      });
    },
    // удаление задачи из списка
    deleteTaskList: (state, action: PayloadAction<number[]>) => {
      state.map((item) => {
        if (item.id === action.payload[0]) {
          item.listTask.filter((item) => item.id !== action.payload[1]);
        }
      });

      state.map((item) => {
        if (item.id === action.payload[0]) {
          item.listTask.map((item, index) => {
            item.id = index;
          });
        }
      });
    },
  },
});

export const { addToDoTask, deleteToDoTask, taskListStatus, taskStatus, deleteTaskList } =
  arrayTasksSlice.actions;

export default arrayTasksSlice.reducer;
