import { BiSolidTrash } from "react-icons/bi";

import { CustomButton } from "../CustomButton";
import { changeTaskType } from "../../types";

import styles from "./changeTask.module.scss";

export function ChangeTask({ status, id, task, deleteTask, checkedTask }: changeTaskType) {
  return (
    <div className={styles.block}>
      <input
        checked={status}
        type="checkbox"
        id={`s${id}`}
        onChange={() => {
          checkedTask();
        }}
      />
      <label htmlFor={`s${id}`}>
        <h4 className={`${status && styles.block__status}`}>{task}</h4>
      </label>
      <CustomButton
        text="удалить задачу"
        timeoutIn={500}
        onClick={() => {
          deleteTask();
        }}>
        <BiSolidTrash />
      </CustomButton>
    </div>
  );
}
