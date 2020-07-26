import React from "react";
import "./Header.css";
import test from "../../images/sprite.png";

class Header extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <a className="Nav-brand-logo" href="/">
              Instagram
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
