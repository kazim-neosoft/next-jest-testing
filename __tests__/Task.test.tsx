/* eslint-disable testing-library/no-wait-for-side-effects */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
  getByText,
} from "@testing-library/react";
import Task from "@/app/components/Task";
import TodoList from "@/app/components/TodoList";


const mockData = [
  {
    id: "1",
    text: "buy milk with some orange cke",
    isDone: false,
  },
  {
    id: "2",
    text: "buy a bread and butter with milk",
    isDone: false,
  },
  {
    id: "3",
    text: "buy vegetables for what",
    isDone: true,
  },
  {
    id: "9bafb4ab-fcf3-492b-8286-446d4146bddb",
    text: "test1",
    isDone: true,
  },
];
describe("Task", () => {
  it("should render a task with its text and status", () => {
    const task = {
      id: "25",
      text: "Task 1",
      isDone: false,
    };

    render(
      <table>
        <tbody>
          <Task
            task={task}
            getTodosData={() => {
              return mockData;
            }}
          />
        </tbody>
      </table>
    );

    expect(screen.getByText("Task 1")).toBeInTheDocument();
  });

  it("should open edit modal when edit button is clicked", () => {
    const task = {
      id: "25",
      text: "Task 1",
      isDone: false,
    };
    render(
      <table>
        <tbody>
          <Task
            task={task}
            getTodosData={() => {
              return mockData;
            }}
          />
        </tbody>
      </table>
    );

    fireEvent.click(screen.getByTestId("edit-button"));

    expect(screen.getByText("Edit Task")).toBeInTheDocument();
  });

  it("should open edit modal and text should be the given mock data when edit button is clicked", () => {
    const task = {
      id: "25",
      text: "Task 1",
      isDone: false,
    };
    render(
      <table>
        <tbody>
          <Task
            task={task}
            getTodosData={() => {
              return mockData;
            }}
          />
        </tbody>
      </table>
    );

    fireEvent.click(screen.getByTestId("edit-button"));

    expect(screen.getByPlaceholderText("Type here")).toHaveValue("Task 1");
  });

  it("should close edit modal when edit form is submitted", async () => {
    const task = {
      id: "25",
      text: "Task 1",
      isDone: false,
    };

    render(
      <table>
        <tbody>
          <Task
            task={task}
            getTodosData={() => {
              return mockData;
            }}
          />
        </tbody>
      </table>
    );

    fireEvent.click(screen.getByTestId("edit-button"));

    await waitFor(async () => {
      fireEvent.submit(screen.getByTestId("edit-form"));
    });

    // expect(screen.queryByText("Edit Task")).not.toBeInTheDocument();
    expect(screen.queryByTestId("edit-modal")).not.toBeInTheDocument();
  });

  it("should open delete modal when delete button is clicked", () => {
    const task = {
      id: "25",
      text: "Task 1",
      isDone: false,
    };
    render(
      <table>
        <tbody>
          <Task
            task={task}
            getTodosData={() => {
              return mockData;
            }}
          />
        </tbody>
      </table>
    );

    fireEvent.click(screen.getByTestId("delete-button"));

    expect(screen.getByTestId("delete-modal")).toBeInTheDocument();
  });

  it("should close delete modal when delete task is confirmed", async () => {
    const task = {
      id: "25",
      text: "Task 1",
      isDone: false,
    };
    render(
      <table>
        <tbody>
          <Task
            task={task}
            getTodosData={() => {
              return mockData;
            }}
          />
        </tbody>
      </table>
    );
    fireEvent.click(screen.getByTestId("delete-button"));

    await waitFor(async () => {
      fireEvent.click(screen.getByTestId("confirm-delete-button"));
    });
    expect(
      screen.queryByText("Are you sure, you want to delete this task?")
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId("delete-modal")).not.toBeInTheDocument();
  });


  it('should have text-decoration "line-through" when the task is done', () => {
    const task = { id: "1", text: "Sample Task", isDone: true }; // Set the task as done

    const { getByText } = render(
      <table>
        <tbody>
          <Task
            task={task}
            getTodosData={() => {
              return mockData;
            }}
          />
        </tbody>
      </table>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const textElement = getByText("Sample Task");

    expect(textElement).toHaveStyle("text-decoration: line-through");
  });

  it("if task is not checked(done) there should be no strike line on particular task", () => {
    const task = { id: "1", text: "Task for testing", isDone: false }; 
    const { getByText } = render(
      <table>
        <tbody>
          <Task
            task={task}
            getTodosData={() => {
              return mockData;
            }}
          />
        </tbody>
      </table>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const textElement = getByText("Task for testing");

    expect(textElement).toHaveStyle("text-decoration: none");
  });

 
});
