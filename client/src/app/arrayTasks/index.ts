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
    deleteToDoTask: (state, action: PayloadAction<string>) => {
      state = state.filter((item) => item.id !== action.payload);
    },
    // изменяет статус списка задач если весь список выполнен
    taskListStatus: (state, action: PayloadAction<string>) => {
      state.map((item) => {
        if (item.id === action.payload) {
          item.status = !item.status;
        }
      });
    },
    // изменяет статус задачи из списка
    taskStatus: (state, action: PayloadAction<{ idArray: string; idList: string }>) => {
      state.map((item) => {
        if (item.id === action.payload.idArray) {
          item.listTask.map((item) => {
            if (item.id === action.payload.idList) {
              item.status = !item.status;
            }
          });
        }
      });
    },
    // удаление задачи из списка
    deleteTaskList: (state, action: PayloadAction<{ idArray: string; idList: string }>) => {
      state.map((item) => {
        if (item.id === action.payload.idArray) {
          const indexElement = item.listTask.findIndex((item) => item.id === action.payload.idList);
          if (indexElement >= 0) {
            item.listTask.splice(indexElement, 1);
          }
        }
      });
    },
  },
});

export const { addToDoTask, deleteToDoTask, taskListStatus, taskStatus, deleteTaskList } =
  arrayTasksSlice.actions;

export default arrayTasksSlice.reducer;
