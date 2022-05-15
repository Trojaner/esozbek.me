import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../../static/assets/social/github-alt.png";

export default function Navbar() {
  var [navBarActiveClass, setNavBarActiveClass] = useState<string>("");
  const toggleHamburger = () => {
    setNavBarActiveClass(prev => prev == "" ? "is-active" : "");
  }

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="is-flex is-align-items-center is-justify-content-space-between">
          <Link className="navbar-item" to="/">
            <b>Enes</b>&nbsp;Sadık&nbsp;<b>Özbek</b>
          </Link>
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => toggleHamburger()}
              onClick={() => toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${navBarActiveClass}`}
        >
          <div className="navbar-end has-text-centered">
          <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/cv">
              CV
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

