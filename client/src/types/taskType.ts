export type Task = {
  id: number;
  task: string;
  status: boolean;
};

export type ArrayTaskList = {
  id: number;
  name: string;
  status: boolean;
  listTask: Task[];
};
