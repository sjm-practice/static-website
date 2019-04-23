import { configure, addDecorator } from "@storybook/react";
import React, { Fragment } from "react";
import { GlobalStyle } from "../src/globalStyle";

function withGlobalStyle(storyFn) {
  return (
    <Fragment>
      <GlobalStyle />
      {storyFn()}
    </Fragment>
  );
}

addDecorator(withGlobalStyle);

const req = require.context("../src", true, /__stories__\/.*.stories.jsx?/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
