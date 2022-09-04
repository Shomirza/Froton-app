import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import * as TiIcons from "react-icons/ti";
import * as MaIcons from "react-icons/md";
import * as IoIcons from "react-icons/io5";
import * as ReIcons from "react-icons/ri";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav>
      <div className="nav-left">
        <NavLink to={"/"} className={`${pathname === "/" ? "shadow" : ""}`}>
          <TiIcons.TiHome />
        </NavLink>
        <NavLink
          to={"/friends"}
          className={`${pathname === "/friends" ? "shadow" : ""}`}
        >
          <MaIcons.MdGroups />
        </NavLink>
        <NavLink
          to={"/settings"}
          className={`${pathname === "/settings" ? "shadow" : ""}`}
        >
          <MaIcons.MdSettings />
        </NavLink>
        <NavLink
          to={"/profile"}
          className={`${pathname === "/profile" ? "shadow" : ""}`}
        >
          <IoIcons.IoPersonCircleSharp />
        </NavLink>
        <NavLink
          to={"/tape"}
          className={`${pathname === "/tape" ? "shadow" : ""}`}
        >
          <MaIcons.MdFilterList />
        </NavLink>
      </div>
      <NavLink to={"/login"}>
        <ReIcons.RiLoginBoxLine />
      </NavLink>
    </nav>
  );
}

export default Navbar;
