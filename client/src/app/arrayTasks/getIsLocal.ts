import { ArrayTaskList } from "../../types";

export function getIsLocal(): ArrayTaskList[] {
  const arrTask = localStorage.getItem("arrTask");

  if (arrTask === null) {
    return [];
  }
  return JSON.parse(arrTask);
}
