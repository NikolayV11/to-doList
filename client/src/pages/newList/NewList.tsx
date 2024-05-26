import { useSelector } from "react-redux";
import { NameToDo, NewTask, ChangeTask } from "../../components";

import styles from "./NewList.module.scss";

import { RootState } from "../../app/store";

export const NewList = () => {
  const arrTask = useSelector((state: RootState) => state.newTask.listTask);
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
        <h3>ws</h3>
      </div>
    </div>
  );
};
