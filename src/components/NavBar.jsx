import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="navbar-start text-3xl text-primary font-bold">
          <NavLink to="/">Omni Shop</NavLink>
        </div>
        <ul className="navbar-end flex flex-row gap-3 text-2xl">
          <li>
            <NavLink to="../shop" className="link link-accent link-hover">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="../cart" className="link link-accent link-hover">
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
