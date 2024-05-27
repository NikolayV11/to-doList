import { useSelector } from "react-redux";
import { NameToDo, NewTask, ChangeTask, CustomButton } from "../../components";

import styles from "./NewList.module.scss";

import { RootState, useAppDispatch } from "../../app/store";
import { BiCheck, BiX } from "react-icons/bi";

import { cancelTaskCreation } from "../../app/savingTasksSlice";

export const NewList = () => {
  const arrTask = useSelector((state: RootState) => state.newTask.listTask);
  const nameTask = useSelector((state: RootState) => state.newTask.name);

  const Dispatch = useAppDispatch();

  return (
    <div className={styles.block}>
      <div>
        <NameToDo />
      </div>
      <div className={styles.block__main}>
        {arrTask.map((item, index) => {
          return <ChangeTask {...item} key={`${index} ${item.id}`} />;
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
            <CustomButton text="Создать список" timeoutIn={500}>
              <BiCheck />
            </CustomButton>
          </>
        )}
      </div>
    </div>
  );
};
