import React from "react";
// import { cleanup, render } from "@testing-library/react";
import Column from "./column.jsx";
import renderer from "react-test-renderer";

// automatically unmount and cleanup DOM after the test is finished.
// afterEach(cleanup);

test("Column renders", () => {
  const component = renderer.create(<Column>Test</Column>);
  // const component = render(<Column>Test</Column>);
  expect(component).toBeTruthy();
});
