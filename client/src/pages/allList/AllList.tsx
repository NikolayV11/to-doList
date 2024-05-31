import { AiFillEdit } from "react-icons/ai";
import { MiniPost } from "../../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
export const AllList = () => {
  const taskList = useSelector((state: RootState) => state.listTask);

  return (
    <>
      <div className="linkBlock">
        <Link to="/new_list">
          Создань новый список <AiFillEdit />
        </Link>
      </div>
      {taskList.map((item, index) => {
        return <MiniPost title={item.name} id={item.id} key={index} />;
      })}
    </>
  );
};
