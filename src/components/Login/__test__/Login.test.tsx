import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../Login";

describe("UI items", () => {
  test("Find lable", () => {
    render(<Login setID={(id: string) => {}} />);
    const inputElement = screen.getByText("Enter your ID");
    expect(inputElement).toBeInTheDocument;
  });

  test("Find 2 Button", () => {
    render(<Login setID={(id: string) => {}} />);
    const inputElement = screen.getAllByRole("button");
    expect(inputElement.length).toBe(2);
  });
});

describe("Functionality", () => {
  test("On Enter of Login ID", () => {
    render(<Login setID={(id: string) => {}} />);
    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText("Enter your Id");
    fireEvent.change(inputElement, { target: { value: "element" } });
    expect(inputElement.value).toBe("element");
  });

  it("Id required field test", () => {
    render(<Login setID={(id: string) => {}} />);
    const button = screen.getByRole("button", { name: /Login/i });
    const errorTextElement = screen.queryByText("Please Enter ID");
    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText("Enter your Id");

    expect(screen.queryByText("Please Enter ID")).toBeNull;

    fireEvent.click(button);
    expect(inputElement.value).toBe("");
    expect(errorTextElement).toBeInTheDocument;
  });

  it("When login id is provided", () => {
    render(<Login setID={(id: string) => {}} />);
    const button = screen.getByRole("button", { name: /Login/i });
    const errorTextElement = screen.queryByText("Please Enter ID");
    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText("Enter your Id");
    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.click(button);
    expect(inputElement.value).toBe("test");
    expect(errorTextElement).toBeNull;
  });
});
