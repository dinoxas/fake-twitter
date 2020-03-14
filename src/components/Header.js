import React from "react";

import { FaTwitter, FaReact } from "react-icons/fa";

export default function Header() {
  return (
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item is-size-5">FakeTwitter </div>
          <div className="navbar-item">
            <FaReact size="32" color="#fff" style={{ marginRight: "5px" }} />
            <FaTwitter size="32" color="fff" />
          </div>
        </div>
      </div>
    </nav>
  );
}
