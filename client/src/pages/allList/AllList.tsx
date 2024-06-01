import { AiFillEdit } from "react-icons/ai";
import { TaskBlok } from "../../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
export const AllList = () => {
  const taskList = useSelector((state: RootState) => state.listTask);

  return (
    <div className="pages">
      <div className="linkBlock">
        <Link to="/new_list">
          Создань новый список <AiFillEdit />
        </Link>
      </div>
      {taskList.map((item, index) => {
        return <TaskBlok {...item} key={index} />;
      })}
    </div>
  );
};
