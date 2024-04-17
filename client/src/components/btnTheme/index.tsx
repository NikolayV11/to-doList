// запись
import { useAppDispatch } from "../../app/store";
// чтение
import { useSelector } from "react-redux";
import { selectTheme, topicUpdate } from "../../app/themeAppSlice";

import styles from "./btnTheme.module.scss";

export const BtnTheme = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useAppDispatch();
  function onClickTheme() {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    dispatch(topicUpdate());
  }

  return (
    <button
      className={styles.btnTheme}
      onClick={() => {
        onClickTheme();
      }}>
      <div
        className={`${styles.slider} ${
          theme === "dark" ? styles.slider_dark : styles.slider_light
        }`}>
        <div
          className={`${styles.slider__circle} ${
            theme === "dark" && styles.slider__circle_active
          }`}></div>
      </div>
    </button>
  );
};
