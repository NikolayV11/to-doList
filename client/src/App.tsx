import { Link, Outlet, useLocation } from "react-router-dom";
import { MiniPost } from "./components";
import { Header, Main } from "./components";
import { useAppDispatch, RootState } from "./app/store";
import { darkTheme } from "./app/themeAppSlice";
import { useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";

import { useSelector } from "react-redux";

function App() {
  const taskList = useSelector((state: RootState) => state.listTask);

  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "dark") {
      dispatch(darkTheme());
    }
  }, []);
  return (
    <div className="container">
      <Header />
      <Main>
        <Outlet />
        {location.pathname === "/" ? (
          <>
            <div className="linkBlock">
              <Link to="/new_list">
                Создань новый список <AiFillEdit />
              </Link>
            </div>
            {taskList.map((item, index) => {
              return <MiniPost title={item.name} id={item.id} key={index} />;
            })}
          </>
        ) : (
          <></>
        )}
      </Main>
    </div>
  );
}

export default App;
