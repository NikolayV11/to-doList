import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/store";

import { Link, useLocation } from "react-router-dom";
import { ChangeTask, CustomButton } from "../../components";
import { deleteTaskList, taskStatus, taskListStatus, deleteToDoTask } from "../../app/arrayTasks";
import { BiSolidTrash } from "react-icons/bi";

type IDList = { idArray: string; idList: string };
export function TaskList() {
  const Dispatch = useAppDispatch();
  const location = useLocation();
  const idTask = location.pathname.split("/")[2];

  const taskList = useSelector((state: RootState) =>
    state.listTask.find((item) => item.id === idTask),
  );

  function deleteTask({ idArray, idList }: IDList) {
    Dispatch(deleteTaskList({ idArray, idList }));
  }

  function checkedTask({ idArray, idList }: IDList) {
    Dispatch(taskStatus({ idArray, idList }));
  }
  return taskList ? (
    <div>
      <div className="title_list">
        <input
          type="checkbox"
          checked={taskList.status}
          onChange={() => {
            Dispatch(taskListStatus(taskList.id));
          }}
        />
        <h1>{taskList.name}</h1>
        <CustomButton
          text="удалить задачу"
          timeoutIn={500}
          onClick={() => {
            Dispatch(deleteToDoTask(taskList.id));
          }}>
          <BiSolidTrash />
        </CustomButton>
      </div>
      <div>
        {taskList.listTask.map((item) => {
          return (
            <ChangeTask
              deleteTask={() => deleteTask({ idArray: taskList.id, idList: item.id })}
              checkedTask={() => {
                checkedTask({ idArray: taskList.id, idList: item.id });
              }}
              {...item}
              key={`${taskList.id}`}
            />
          );
        })}
      </div>
      <div></div>
    </div>
  ) : (
    <div className="info_list">
      <h1>Задача не найдена</h1>
      <Link to="/">Вернутся на главную страницу</Link>
    </div>
  );
}
