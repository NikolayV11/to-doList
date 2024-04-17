import { Link, Outlet, useLocation } from "react-router-dom";
import { MiniPost } from "./components";
import { Header, Main } from "./components";
import { useAppDispatch } from "./app/store";
import { darkTheme } from "./app/themeAppSlice";
import { useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "dark") {
      dispatch(darkTheme());
    }
  }, []);
  const sceletons = [...new Array(20)];
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
            {sceletons.map((_, index) => {
              return <MiniPost id={index} key={index} />;
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
