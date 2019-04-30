import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Features = ({ classes }) => {
  return (
    <div id="Features" className={classes.container}>
      <Typography variant="h5">Features</Typography>
    </div>
  );
};

Features.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(Features);
