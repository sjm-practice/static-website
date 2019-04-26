import { configure, addDecorator, addParameters } from "@storybook/react";
import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

function withMaterialUi(storyFn) {
  return (
    <Fragment>
      <CssBaseline />
      {storyFn()}
    </Fragment>
  );
}

addDecorator(withMaterialUi);

addParameters({
  backgrounds: [
    { name: 'dark green', value: 'darkgreen' },
  ],
});

const req = require.context("../src", true, /__tests__\/.*.stories.jsx?/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
