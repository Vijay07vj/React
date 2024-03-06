import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  it("Should Load the Contact Us Component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion.
    expect(heading).toBeInTheDocument();
  });
  it("Should Load the button inside my Contact Us Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    //Assertion.
    expect(button).toBeInTheDocument();
  });
  it("Should Load the inputName inside my Contact Us Component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Name");
    //Assertion.
    expect(inputName).toBeInTheDocument();
  });
  it("Should Load two inputBoxes inside my Contact Us Component", () => {
    render(<Contact />);
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //Assertion
    expect(inputBoxes.length).toBe(2);
    // console.log(input.length);
  });
});
