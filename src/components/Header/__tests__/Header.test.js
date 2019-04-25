/* eslint-env jest */
import React from "react";
import TestRenderer from "react-test-renderer";
import Header from "../index";

describe("<Header />", () => {
  it("should render and match snapshot", () => {
    const testRenderer = TestRenderer.create(<Header />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
