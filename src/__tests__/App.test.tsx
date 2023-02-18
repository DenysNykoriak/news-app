import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("Simple App test", () => {
  render(<App />);
  const appEl = screen.getByTestId("App");

  expect(appEl).toBeInTheDocument();
});
