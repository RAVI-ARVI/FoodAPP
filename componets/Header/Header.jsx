import React from "react";
import { Link } from "react-router-dom";

const Logo = () => (
  <img
    src="https://raw.githubusercontent.com/RAVI-ARVI/Food-hub/12af356a09ad882683a5fe9c2419cdff253ad47e/img/logo.svg"
    alt="logo"
    className="h-14 p-2"
  />
);
function Header() {
  return (
    <div className="flex justify-between items-center shadow-md">
      <Logo />

      <ul className="flex">
        <li>
          <Link to={"/"} className="p-3">
            home
          </Link>
        </li>

        <li>
          <Link to={"/about"} className="p-3">
            about{" "}
          </Link>
        </li>

        <li>
          <Link to={"/contact"} className="p-3">
            contact
          </Link>
        </li>
        <li>
          <Link to={"/profile"} className="p-3">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
