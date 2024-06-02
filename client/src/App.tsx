import { Outlet, useLocation } from "react-router-dom";
import { Header, Main } from "./components";
import { useAppDispatch, RootState } from "./app/store";
import { darkTheme } from "./app/themeAppSlice";
import { useEffect, useRef } from "react";
import { Home } from "./pages";
import { useSelector } from "react-redux";

function App() {
  // Первая загрузка
  const isMounted = useRef(false);
  // массив списка задач
  const listTask = useSelector((state: RootState) => state.listTask);

  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "dark") {
      dispatch(darkTheme());
    }
  }, []);

  // записываем данные в память браузера
  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("arrTask", JSON.stringify(listTask));
    }
    isMounted.current = true;
  }, [listTask]);

  return (
    <div className="container">
      <Header />
      <Main>
        <Outlet />
        {location.pathname === "/" ? <Home /> : <></>}
      </Main>
    </div>
  );
}

export default App;
