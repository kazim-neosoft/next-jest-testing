"use client";

import React, { FormEventHandler, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { addTodo } from "../../../api";
// import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

interface AddTaskProps {
  getTodosData: () => any;
}

const AddTask: React.FC<AddTaskProps> = ({ getTodosData }) => {
  // const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (newTaskValue?.length > 0) {
      await addTodo({
        id: uuidv4(),
        text: newTaskValue,
        isDone: false,
      });
      setNewTaskValue("");
      setModalOpen(false);
      // router.refresh();
      getTodosData();
    }
  };

  return (
    <>
      <div>
        <button
          className="btn btn-primary w-full"
          onClick={() => setModalOpen(true)}
        >
          Add New Task <AiOutlinePlus className="ml-2" size={20} />{" "}
        </button>
      </div>
      {modalOpen && (
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
          <form onSubmit={handleSubmitNewTodo}>
            <h3 className="font-bold text-lg">New Task</h3>
            <div className="modal-action">
              <input
                type="text"
                data-testid="input-new-todo"
                placeholder="Type here"
                className="input input-bordered w-full "
                value={newTaskValue}
                onChange={(event) => setNewTaskValue(event.target.value)}
                required
              />

              <button type="submit" className="btn" data-testid="submit-todo">
                Submit
              </button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default AddTask;
