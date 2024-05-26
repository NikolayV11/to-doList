import { useCallback, useEffect, useRef, useState } from "react";
import classes from "./ToolTopComponent.module.scss";
import { PropsTypeToolTip } from "../../types";

export const ToolTipComponent = ({ children, text, customClass, timeoutIn }: PropsTypeToolTip) => {
  // хроним setTimeout в useRef
  const refSetTimeout = useRef<NodeJS.Timeout>();
  const [showToolTip, setShowToolTip] = useState(false);
  // костомый класс или стандартный
  const toolTipClasses = customClass ? `${classes.toolTip} ${customClass}` : `${classes.toolTip}`;
  // задавать время на появление подсказки
  const timeout = timeoutIn ? timeoutIn : false;
  // навели мышь на компонент
  const onMouseEnterHandler = () => {
    if (timeout) {
      refSetTimeout.current = setTimeout(() => {
        setShowToolTip(true);
      }, timeout);
    }
  };

  // убрали мышь с компонента
  const onMouseLeaveHandler = () => {
    clearTimeout(refSetTimeout.current);
    setShowToolTip(false);
  };

  // // отслеживание мыши
  // const ref = useRef<HTMLDivElement>(null);
  // const [imagePos, setImagePos] = useState({ x: 0, y: 0 });

  // const handlerMoveMouse = useCallback((e: { x: number; y: number }) => {
  //   if (ref.current === null) return;
  //   const rect = ref.current.getBoundingClientRect();
  //   setImagePos({ x: e.x - rect.x, y: e.y - rect.y });
  //   console.log(imagePos);
  // }, []);

  // useEffect(() => {
  //   const _ref = ref.current;
  //   if (!_ref) return;
  //   _ref.addEventListener("mousemove", handlerMoveMouse);
  //   return () => {
  //     _ref.removeEventListener("mousemove", handlerMoveMouse);
  //   };
  // }, [handlerMoveMouse]);

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
