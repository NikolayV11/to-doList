import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "../";
import { CgArrowLeftO } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
export const Header = () => {
  const navigate = useNavigate();
  // показывает путь из URL
  const location = useLocation();

  return (
    <header>
      {location.pathname !== "/" && (
        <nav className="headerNavBtn">
          <button
            onClick={() => {
              navigate(-1); // на 1 страницу назад
            }}
            className="headerBtn">
            <CgArrowLeftO />
          </button>
          <Link to="/" className="headerBtn">
            <FaHome />
          </Link>
        </nav>
      )}
      <h1>to-do list</h1>
      <Menu />
    </header>
  );
};
