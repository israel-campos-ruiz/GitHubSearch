import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/shared/Navbar.css";

const Navbar = ({ children }) => {
  const isChecked = children.props.checked;
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${
        isChecked ? "nav__dark" : "nav__light   "
      } fixed`}
    >
      <div className="container">
        <NavLink className="navbar-brand nav-color" exact to="/home">
          Zebrands test
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link nav-color space" exact to="/home">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link nav-color space" exact to="/repos">
                Repositorios
              </NavLink>
            </li>
          </ul>
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
