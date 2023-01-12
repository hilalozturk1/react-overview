/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

describe("Counter Test", () => {
  let increaseBtn, decreaseBtn, count;
  beforeEach(() => {
    console.log("Before each test");
    render(<Counter />);
    count = screen.getByText("0");
    increaseBtn = screen.getByText("increase");
    decreaseBtn = screen.getByText("decrease");
  });
  beforeAll(() => {
    console.log("Before all test");
  });
  afterEach(() => {
    console.log("After each test");
  });
  afterAll(() => {
    console.log("After all test");
  });
  it("increase btn", () => {
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  it("decrease btn", () => {
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});
