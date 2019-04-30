/* eslint-env jest */
import React from "react";
import TestRenderer from "react-test-renderer";
import Features from "../index";

describe("<Features />", () => {
  it("should render and match snapshot", () => {
    const testRenderer = TestRenderer.create(<Features />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
