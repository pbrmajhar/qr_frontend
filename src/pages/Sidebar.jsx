import React from "react";
import "./Sidebar.style.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="container">
        <div className="row">
          <ul>
            <li>
              <NavLink
                to={"/dashboard"}
                className="waves-effect waves-light btn"
              >
                All Tokens
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/newtoken"}
                className="waves-effect waves-light btn"
              >
                New Token
              </NavLink>
            </li>
            <li>
              <a className="waves-effect waves-light btn">main</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
