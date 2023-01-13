/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Header from "./Header";

it("Header should be rendered", () => {
  render(<Header />);
  expect(screen.getByText("Emoji Search")).toBeInTheDocument();
  const Images = screen.getAllByRole("img");
  expect(Images[0]).toHaveAttribute("src", "//cdn.jsdelivr.net/emojione/assets/png/1f638.png");
  expect(Images[1]).toHaveAttribute("src", "//cdn.jsdelivr.net/emojione/assets/png/1f63a.png");
});
