import { ReactElement, useRef, useState } from "react";
import classes from "./ToolTopComponent.module.scss";

export type PropsTypeToolTip = {
  children: ReactElement;
  text: string;
  customClass?: string;
  timeoutIn?: number;
};
export const ToolTipComponent = ({ children, text, customClass, timeoutIn }: PropsTypeToolTip) => {
  // хроним setTimeout в useRef
  const refSetTimeout = useRef<NodeJS.Timeout>();
  const [showToolTip, setShowToolTip] = useState(false);
  // костомый класс или стандартный
  const toolTipClasses = customClass ? `${classes.toolTip} ${customClass}` : `${classes.toolTip}`;
  // задавать время на появление подсказки
  const timeout = timeoutIn ? timeoutIn : 750;
  // навели мышь на компонент
  const onMouseEnterHandler = () => {
    refSetTimeout.current = setTimeout(() => {
      setShowToolTip(true);
    }, timeout);
  };

  // убрали мышь с компонента
  const onMouseLeaveHandler = () => {
    clearTimeout(refSetTimeout.current);
    setShowToolTip(false);
  };

  return (
    <div
      className={classes.container}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}>
      {children}
      {showToolTip && <div className={toolTipClasses}>{text}</div>}
    </div>
  );
};
