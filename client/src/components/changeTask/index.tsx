import { Task } from "../../types";
import { changeTask, deleteTask } from "../../app/savingTasksSlice";
import { useAppDispatch } from "../../app/store";
import { CustomButton } from "..";
import styles from "./changeTask.module.scss";
import { BiSolidTrash } from "react-icons/bi";

export function ChangeTask({ status, id, task }: Task) {
  const Dispatch = useAppDispatch();

  function changeStatus(id: number) {
    Dispatch(changeTask(id));
  }
  return (
    <div className={styles.block}>
      <input
        checked={status}
        type="checkbox"
        id={`s${id}`}
        onChange={() => {
          changeStatus(id);
        }}
      />
      <label htmlFor={`s${id}`}>
        <h4 className={`${status && styles.block__status}`}>{task}</h4>
      </label>
      <CustomButton
        text="удалить задачу"
        timeoutIn={500}
        onClick={() => {
          console.log(id);
          Dispatch(deleteTask(id));
        }}>
        <BiSolidTrash />
      </CustomButton>
    </div>
  );
}
