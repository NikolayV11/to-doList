import { Outlet, useLocation } from "react-router-dom";
import { Header, Main } from "./components";
import { useAppDispatch } from "./app/store";
import { darkTheme } from "./app/themeAppSlice";
import { useEffect } from "react";
import { Home } from "./pages";

function App() {
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
        {location.pathname === "/" ? <Home /> : <></>}
      </Main>
    </div>
  );
}

export default App;
