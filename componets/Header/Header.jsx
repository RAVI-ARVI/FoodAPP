import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const Logo = () => (
  <img
    src="https://www.logodesign.net/assets/images/new-ui/logo.png"
    alt="logo"
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
        </ul>
      </div>
    </div>
  );
}

export default Header;
