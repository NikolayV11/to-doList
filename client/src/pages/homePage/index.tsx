import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { TaskBlok } from "../../components";

import { Link } from "react-router-dom";
export function Home() {
  const listTask = useSelector((state: RootState) => state.listTask);

  return (
    <div>
      {listTask.slice(0, 5).map((item) => {
        return <TaskBlok {...item} />;
      })}
      {listTask.length > 5 && <Link to="/all_list/">весь список задач</Link>}
    </div>
  );
}
