import React from "react";
import { Link } from "@reach/router";
import { NavBarContainer } from "./styles";

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </NavBarContainer>
  );
};

export default NavBar;
