import { TypeBtnCustom } from "../../types";
import { ToolTipComponent } from "../index";

import styles from "./CustomButton.module.scss";

export const CustomButton = ({
  children,
  text,
  customClass,
  timeoutIn,
  className,
  textBtn,
  onClick,
}: TypeBtnCustom) => {
  const customClassBtn = className ? `${styles.btn} ${className}` : `${styles.btn}`;
  return (
    <ToolTipComponent text={text} customClass={customClass} timeoutIn={timeoutIn}>
      <button onClick={onClick} className={customClassBtn}>
        {textBtn ? textBtn : children}
      </button>
    </ToolTipComponent>
  );
};
