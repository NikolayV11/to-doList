export type Task = {
  id: string;
  task: string;
  status: boolean;
};

export type ArrayTaskList = {
  id: string;
  name: string;
  status: boolean;
  listTask: Task[];
};
export type changeTaskType = Task & {
  deleteTask: () => void;
  checkedTask: () => void;
};
