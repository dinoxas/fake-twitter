import React from "react";
import { NavLink } from "react-router-dom";
import { FaFeatherAlt, FaHome } from "react-icons/fa";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home <FaHome size="18" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" activeClassName="active">
            New Tweet <FaFeatherAlt size="18" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
