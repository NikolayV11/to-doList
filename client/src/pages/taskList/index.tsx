import React from "react";

import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/store";

import styles from "./task.module.scss";

import { useLocation } from "react-router-dom";
import { ChangeTask } from "../../components";
import { deleteTaskList, taskStatus, deleteToDoTask } from "../../app/arrayTasks";

export function TaskList() {
  const Dispatch = useAppDispatch();
  const location = useLocation();
  const idTask = +location.pathname.split("/")[2];

  const taskList = useSelector((state: RootState) =>
    state.listTask.find((item) => item.id === idTask),
  );

  function deleteTask(id: number[]) {
    Dispatch(deleteTaskList(id));
  }

  function checkedTask(id: number[]) {
    Dispatch(taskStatus(id));
  }
  return (
    taskList && (
      <div>
        <div>
          <h1>{taskList.name}</h1>
        </div>
        <div>
          {taskList.listTask.map((item, index) => {
            return (
              <ChangeTask
                deleteTask={() => deleteTask([idTask, item.id])}
                checkedTask={() => {
                  checkedTask([idTask, item.id]);
                }}
                {...item}
                key={`${idTask} ${index}`}
              />
            );
          })}
        </div>
        <div></div>
      </div>
    )
  );
}
