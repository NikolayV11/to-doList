import { useSelector } from "react-redux";
import { NameToDo, NewTask, ChangeTaskNew, CustomButton } from "../../components";

import styles from "./NewList.module.scss";

import { RootState, useAppDispatch } from "../../app/store";
import { BiCheck, BiX } from "react-icons/bi";

import { cancelTaskCreation } from "../../app/savingTasksSlice";
import { addToDoTask } from "../../app/arrayTasks";
import { ArrayTaskList } from "../../types";

export const NewList = () => {
  const Dispatch = useAppDispatch();

  const arrTask = useSelector((state: RootState) => state.newTask.listTask);
  const nameTask = useSelector((state: RootState) => state.newTask.name);

  // длина списка
  const lengthList = useSelector((state: RootState) => state.listTask.length);

  // добавляет в общий список задач и очищает временное хранилище
  function addTaskArray() {
    const task: ArrayTaskList = {
      id: lengthList,
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
          return <ChangeTaskNew {...item} key={`${index} ${item.id}`} />;
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
