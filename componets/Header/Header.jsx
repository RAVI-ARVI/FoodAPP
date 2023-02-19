import React from "react";
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
        {" "}
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
