import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Home from "@/app/page";
import { expect, jest, test } from "@jest/globals";
import { getAllTodos } from "../api";

describe("Home", () => {
  it("should have a heading", async () => {
    render(<Home />);

    await waitFor(() => {
      const title = screen.getByText("Todo List App");
      expect(title).toBeInTheDocument();
    });
  });
});
