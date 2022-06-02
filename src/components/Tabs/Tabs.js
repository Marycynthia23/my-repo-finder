import React from "react";
import { Link } from "react-router-dom";

import "./Tabs.css";

const Tabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <p className="nav-link mb-0 active">Repositories</p>
    </li>
    <li className="nav-item">
      <Link to="/issues" className="nav-link mb-0">
        Issues
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/issues" className="nav-link mb-0">
        Packages
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/issues" className="nav-link mb-0">
        People
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/issues" className="nav-link mb-0">
        Projects
      </Link>
    </li>
  </ul>
);

export default Tabs;
