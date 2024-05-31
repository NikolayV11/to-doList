import { useRouteError } from "react-router-dom";
import { darkTheme } from "../../app/themeAppSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../app/store";

export function ErrorPage() {
  const dispatch = useAppDispatch();
  const error = useRouteError();
  console.error(error);
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "dark") {
      dispatch(darkTheme());
    }
    return;
  }, []);
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <h3>Что-то пошло не так</h3>
    </div>
  );
}
