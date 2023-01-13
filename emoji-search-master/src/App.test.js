/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("emoji results should be rendered correctly", () => {
  render(<App />);
  const items = screen.getAllByText("Click to copy emoji");
  expect(items.length).toEqual(20);
});
