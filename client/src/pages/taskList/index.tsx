import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/store";

import { useLocation } from "react-router-dom";
import { ChangeTask } from "../../components";
import { deleteTaskList, taskStatus } from "../../app/arrayTasks";

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
  return (
    taskList && (
      <div>
        <div>
          <h1>{taskList.name}</h1>
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
    )
  );
}
