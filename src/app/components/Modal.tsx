import React from "react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (isOpen: boolean) => boolean | void;
  children: React.ReactNode;
  testId?: string;
}
const Modal: React.FC<ModalProps> = ({
  modalOpen,
  setModalOpen,
  children,
  testId,
}) => {
  return (
    <>
      {modalOpen ? (
        <div
          className={`modal ${modalOpen ? "modal-open" : ""}`}
          data-testid={testId ? testId : ""}
        >
          <div className="modal-box relative">
            <label
              onClick={() => setModalOpen(false)}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
