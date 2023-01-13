/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("emoji results should be rendered correctly", () => {
  render(<App />);
  const items = screen.getAllByText("Click to copy emoji");
  expect(items.length).toEqual(20);
});

it("Filtering should be re-rendered", () => {
  render(<App />);
  const emoji = "smile";
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: emoji } });

  const items = screen.getAllByText("Click to copy emoji");
  expect(items.length).toBeLessThan(1820);
});

it("Correctly coppied", () => {
  render(<App />);
  const click = screen.getAllByText("Click to copy emoji")[0];
  const parent = click.parentElement;
  expect(parent.getAttribute("data-clipboard-text").length).toBeGreaterThan(0);
});
