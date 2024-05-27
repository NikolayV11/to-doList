import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useAppDispatch } from "../../app/store";
import { addNameTaskList } from "../../app/savingTasksSlice";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import styles from "./nameToDo.module.scss";
import { ToolTipComponent, CustomButton } from "..";
import { BiEditAlt } from "react-icons/bi";
export function NameToDo() {
  const [titleList, setTitleList] = useState("");
  // изменение заголовка
  const [statusTitle, setStatusTitle] = useState(false);
  // чтение заголовка задач
  const nameToDo = useSelector((state: RootState) => state.newTask.name);

  const Dispatch = useAppDispatch();

  function sevenName() {
    setTitleList((titleList) => titleList.trim());
    Dispatch(addNameTaskList(titleList));
    setStatusTitle(false);
    setTitleList("");
  }
  return (
    <>
      {nameToDo && statusTitle === false ? (
        <div
          className={styles.title}
          onClick={() => {
            setStatusTitle(true);
          }}>
          <h1>{nameToDo}</h1>
          <CustomButton text="изменить заголовок" timeoutIn={500}>
            <BiEditAlt />
          </CustomButton>
        </div>
      ) : (
        <div className={styles.block__header}>
          <input
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                sevenName();
              }
            }}
            type="text"
            value={titleList}
            maxLength={45}
            onChange={(e) => {
              setTitleList(e.target.value);
            }}
            placeholder="Имя списка"
          />
          {titleList && (
            <div className={styles.block__header_btn}>
              <ToolTipComponent timeoutIn={750} text="Очистить поле">
                <button
                  onClick={() => {
                    setTitleList("");
                  }}>
                  <AiOutlineClose />
                </button>
              </ToolTipComponent>
              <ToolTipComponent timeoutIn={250} text="Сохранит название">
                <button
                  onClick={() => {
                    sevenName();
                  }}>
                  <AiOutlineCheck />
                </button>
              </ToolTipComponent>
            </div>
          )}
        </div>
      )}
    </>
  );
}
