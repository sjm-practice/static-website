import React from "react";
import PropTypes from "prop-types";
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

Header.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(Header);
