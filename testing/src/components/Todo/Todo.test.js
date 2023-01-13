/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index";

describe("Todo tests", () => {
  let button, input;
  beforeEach(() => {
    render(<Todo />);
    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
  });

  it("default values should be rendered", () => {
    const items = screen.getAllByText(/Item/i);
    expect(items.length).toEqual(2);
  });

  it("Input ve button should be found", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
  it("added to the list", () => {
    const name = "Hilal";
    userEvent.type(input, name); //fill the input

    userEvent.click(button); //click the button

    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
