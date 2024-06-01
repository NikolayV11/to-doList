import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { TaskBlok } from "../../components";

import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";

import styles from "./homePage.module.scss";

export function Home() {
  const listTask = useSelector((state: RootState) => state.listTask);

  return (
    <div className="pages">
      <div className={`linkBlock ${styles.home_link}`}>
        <Link to="/new_list">
          Создать новый список <AiFillEdit />
        </Link>
      </div>
      {listTask.slice(0, 5).map((item) => {
        return <TaskBlok {...item} />;
      })}

      {listTask.length > 5 && (
        <div className={`linkBlock ${styles.home_link}`}>
          <Link to="/all_list/">весь список задач</Link>
        </div>
      )}
    </div>
  );
}
