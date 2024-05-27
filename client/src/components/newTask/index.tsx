import React from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { CustomButton } from "../";
import { useAppDispatch } from "../../app/store";
import { addTask } from "../../app/savingTasksSlice";
import styles from "./newTask.module.scss";

export const NewTask = () => {
  const Dispatch = useAppDispatch();
  const [value, setValue] = React.useState<string | undefined>("");
  const refDiv = React.useRef<HTMLDivElement>(null);

  function sevenTask() {
    setValue("");
    if (refDiv.current?.innerText) {
      Dispatch(addTask(refDiv.current.innerText));
      refDiv.current.innerText = "";
    }
  }
  return (
    <div className={styles.block_task}>
      <div
        style={{ width: `${value ? "91%" : "100%"}  ` }}
        className={styles.block_task_input}
        ref={refDiv}
        contentEditable={true}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            sevenTask();
          }
        }}
        onInput={() => {
          setValue(refDiv.current?.innerText);
        }}></div>
      {value && (
        <div className={styles.block_task_btn}>
          <CustomButton
            text="очистить"
            timeoutIn={500}
            onClick={() => {
              if (refDiv.current?.innerText) {
                refDiv.current.innerText = "";
              }
              setValue("");
            }}>
            <AiOutlineClose />
          </CustomButton>
          <CustomButton
            className={styles.btnCustom}
            onClick={() => {
              sevenTask();
            }}
            timeoutIn={850}
            text="сохранить">
            <AiOutlineCheck />
          </CustomButton>
        </div>
      )}
    </div>
  );
};
