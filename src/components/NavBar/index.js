import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <a href="https://avoinsights.com/dashboard/index.php">Dashboard</a>
    </div>
  );
};

export default NavBar;
