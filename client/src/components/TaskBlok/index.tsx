import { useState } from "react";
import { useAppDispatch } from "../../app/store";
import { taskListStatus } from "../../app/arrayTasks";

import { ArrayTaskList } from "../../types";

import styles from "./TaskBlok.module.scss";
import { Link } from "react-router-dom";

export function TaskBlok({ id, name, status }: Omit<ArrayTaskList, "listTask">) {
  const [statusTask, setStatusTask] = useState(status);

  const Dispatch = useAppDispatch();

  function onCheck(id: string) {
    Dispatch(taskListStatus(id));
    setStatusTask(!statusTask);
  }

  return (
    <div className={`${styles.block} ${statusTask && styles.block_active}`}>
      <input type="checkbox" checked={statusTask} onChange={() => onCheck(id)} />
      <Link to={`/task/${id}`}>{name}</Link>
      {status && <p>выполнено</p>}
    </div>
  );
}
