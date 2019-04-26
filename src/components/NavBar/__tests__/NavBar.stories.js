import React from "react";
import { storiesOf } from "@storybook/react";
import { muiTheme } from "storybook-addon-material-ui";
import NavBar from "../index";

storiesOf("Components", module)
  .addDecorator(muiTheme())
  .add("NavBar", () => <NavBar />);
