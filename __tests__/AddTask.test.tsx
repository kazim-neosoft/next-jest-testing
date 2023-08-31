import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import AddTask from "@/app/components/AddTask";

describe("Add Task Component", () => {
  it("renders AddTask component and handles form submission", async () => {
    render(<AddTask getTodosData={jest.fn} />);

    const addButton = screen.getByText("Add New Task");
    fireEvent.click(addButton);

    const inputField = screen.getByPlaceholderText("Type here");
    expect(inputField).toBeInTheDocument();

    fireEvent.change(inputField, { target: { value: "Test Task" } });

    const submitButton = screen.getByRole("button",{name:'Submit'})
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(inputField).toHaveValue("Test Task");
    });
  });

  it("check for form reset after form submission", async () => {
    render(<AddTask getTodosData={jest.fn} />);

    const addButton = screen.getByText("Add New Task");
    fireEvent.click(addButton);

    const inputField = screen.getByPlaceholderText("Type here");
    fireEvent.change(inputField, { target: { value: "testfromtest" } });

    const submitButton = screen.getByRole("button",{name:'Submit'})
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(inputField).toHaveTextContent("");
    });
  });
});
