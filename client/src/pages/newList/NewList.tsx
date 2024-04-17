import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

import { ButtonComponent, ToolTipComponent } from "../../components";

import { useState } from "react";
import styles from "./NewList.module.scss";
export const NewList = () => {
  const [titleList, setTitleList] = useState("");
  return (
    <div className={styles.block}>
      <div className={styles.block__header}>
        <input
          type="text"
          value={titleList}
          onChange={(e) => {
            setTitleList(e.target.value);
          }}
          placeholder="d"
        />
        {titleList && (
          <div className={styles.block__header_btn}>
            <ToolTipComponent text="Очистить поле">
              <button
                onClick={() => {
                  setTitleList("");
                }}>
                <AiOutlineClose />
              </button>
            </ToolTipComponent>
            <ToolTipComponent text="Сохронить название">
              <button>
                <AiOutlineCheck />
              </button>
            </ToolTipComponent>
          </div>
        )}
      </div>
      <div className={styles.block__main}>
        <ToolTipComponent text="я тут" customClass={styles.toolTip}>
          <ButtonComponent></ButtonComponent>
        </ToolTipComponent>
      </div>
      <div className={styles.block__footer}></div>
    </div>
  );
};
