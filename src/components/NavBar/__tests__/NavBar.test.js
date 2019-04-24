/* eslint-env jest */
import React from "react";
import TestRenderer from "react-test-renderer";
import NavBar from "../index";

describe("<NavBar />", () => {
  it("should render and match snapshot", () => {
    const testRenderer = TestRenderer.create(<NavBar />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
