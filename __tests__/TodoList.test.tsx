import { render, screen, fireEvent } from "@testing-library/react";
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

describe("TodoList", () => {
  it("tests all table cells", async () => {
    render(
      <TodoList
        getTodosData={() => {
          return mockData;
        }}
        tasks={mockData}
      />
    );

    // Get all the table cells by their text content
    const tableCells = screen.getAllByText((content, element: any) => {
      return element.tagName.toLowerCase() === "tr";
    });

    tableCells.forEach((cell) => {
      expect(cell).toBeInTheDocument();
    });
    
    expect(tableCells?.length).toEqual(5);
  });
});
