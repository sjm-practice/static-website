import React from "react";
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

export default withStyles(styles)(Features);
