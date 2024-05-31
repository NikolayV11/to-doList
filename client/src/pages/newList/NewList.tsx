import { useSelector } from "react-redux";
import { NameToDo, NewTask, ChangeTask, CustomButton, getId } from "../../components";

import styles from "./NewList.module.scss";

import { RootState, useAppDispatch } from "../../app/store";
import { BiCheck, BiX } from "react-icons/bi";

import { cancelTaskCreation } from "../../app/savingTasksSlice";
import { addToDoTask, deleteToDoTask, taskListStatus } from "../../app/arrayTasks";
import { ArrayTaskList } from "../../types";

export const NewList = () => {
  const Dispatch = useAppDispatch();

  const arrTask = useSelector((state: RootState) => state.newTask.listTask);
  const nameTask = useSelector((state: RootState) => state.newTask.name);

  // генерация ID
  const taskList = getId(
    useSelector((state: RootState) => state.listTask),
    40,
  );

  // добавляет в общий список задач и очищает временное хранилище
  function addTaskArray() {
    const task: ArrayTaskList = {
      id: taskList,
      status: false,
      name: nameTask,
      listTask: arrTask,
    };

    Dispatch(addToDoTask(task));
    Dispatch(cancelTaskCreation());
  }
  return (
    <div className={styles.block}>
      <div>
        <NameToDo />
      </div>
      <div className={styles.block__main}>
        {arrTask.map((item, index) => {
          return (
            <ChangeTask
              deleteTask={() => {
                Dispatch(deleteToDoTask(item.id));
              }}
              checkedTask={() => {
                Dispatch(taskListStatus(item.id));
              }}
              {...item}
              key={`${index} ${item.id}`}
            />
          );
        })}
        {arrTask.length < 10 && <NewTask />}
      </div>
      <div className={styles.block__footer}>
        {nameTask && arrTask.length > 0 && (
          <>
            <CustomButton
              text="Отмена создания"
              timeoutIn={500}
              onClick={() => {
                Dispatch(cancelTaskCreation());
              }}>
              <BiX />
            </CustomButton>
            <CustomButton
              text="Создать список"
              timeoutIn={500}
              onClick={() => {
                addTaskArray();
              }}>
              <BiCheck />
            </CustomButton>
          </>
        )}
      </div>
    </div>
  );
};
