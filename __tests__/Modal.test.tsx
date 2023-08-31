/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { expect } from "@jest/globals";
import Modal from "@/app/components/Modal";

describe("Modal Component", () => {
  it("renders the modal when modalOpen is true", () => {
    const { container } = render(
      <Modal modalOpen={true} setModalOpen={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );

    const modal = container.querySelector(".modal");
    expect(modal).toBeInTheDocument();
  });

  it("does not render the modal when modalOpen is false", () => {
    const { container } = render(
      <Modal modalOpen={false} setModalOpen={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );

    const modal = container.querySelector(".modal");
    expect(modal).not.toBeInTheDocument();
  });

  it("renders children content", () => {
    render(
      <Modal modalOpen={true} setModalOpen={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );

    const modalContent = screen.getByText("Modal Content");
    expect(modalContent).toBeInTheDocument();
  });
});
