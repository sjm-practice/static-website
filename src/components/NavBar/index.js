import React from "react";
import { Link } from "@reach/router";
import { Container } from "./styles";

const NavBar = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <a href="https://avoinsights.com/dashboard/index.php">Dashboard</a>
    </Container>
  );
};

export default NavBar;
