import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Header = ({ classes }) => {
  return (
    <div id="Header" className={classes.container}>
      <Typography variant="h5">Header</Typography>
    </div>
  );
};

export default withStyles(styles)(Header);
