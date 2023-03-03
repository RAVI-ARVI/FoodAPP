import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const Logo = () => (
  <img
    src="https://raw.githubusercontent.com/RAVI-ARVI/Food-hub/12af356a09ad882683a5fe9c2419cdff253ad47e/img/logo.svg"
    alt="logo"
    className="logo"
  />
);
function Header() {
  return (
    <div className="nav">
      <Logo />
      <div className="navitem">
        <ul>
          <li>
            <Link to={"/"} className="link">
              home
            </Link>
          </li>

          <li>
            <Link to={"/about"} className="link">
              about{" "}
            </Link>
          </li>

          <li>
            <Link to={"/contact"} className="link">
              contact
            </Link>
          </li>
          <li>
            <Link to={"/profile"} className="link">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
