import React from "react";
import { Link } from "@reach/router";
import { Container } from "./styles";

const NavBar = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </Container>
  );
};

export default NavBar;
