import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

it("Should load contact us component", () => {
  render(<ContactUs />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

it("Should have textbox in contact us component", () => {
  render(<ContactUs />);

  const userInput = screen.getByPlaceholderText("username");

  expect(userInput).toBeInTheDocument();
});

it("Should have submit button in contact us component", () => {
  render(<ContactUs />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

it("Should have 2 textboxes in contact us component", () => {
  render(<ContactUs />);

  const inputBoxes = screen.getAllByRole("textbox");

  expect(inputBoxes.length).toBe(2);
});
