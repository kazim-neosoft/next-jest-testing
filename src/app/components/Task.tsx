"use client";

import React, { FormEventHandler, useState } from "react";
import { ITask } from "../../../types/tasks";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { deleteTodo, updateTodo } from "../../../api";
// import { useRouter } from "next/navigation";

interface TaskProp {
  task: ITask;
  getTodosData: () => any;
}

const Task: React.FC<TaskProp> = ({ task, getTodosData }) => {
  const [openModalEdit, setModalEditOpen] = useState<boolean>(false);
  const [openModalDelete, setModalDeleteOpen] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState({
    text: task.text,
    isDone: task.isDone,
  });
  // const router = useRouter();

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if(taskToEdit.text!==task.text){
      await updateTodo({
        id: task.id,
        text: taskToEdit.text,
        isDone: taskToEdit.isDone,
      });
      getTodosData();
    }
    setModalEditOpen(false);
    // router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setModalDeleteOpen(false);
    // router.refresh();
    getTodosData();
  };

  const handleDoneTask = async () => {
    await updateTodo({
      id: task.id,
      text: taskToEdit.text,
      isDone: !task.isDone,
    });
    getTodosData();
    // router.refresh();
  };

  return (
    <tr>
      <td className="w-full">
        <input
          type="checkbox"
          checked={task.isDone}
          className="checkbox checkbox-xs mr-5 checkbox-primary"
          onChange={() => handleDoneTask()}
        />
        <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
          {" "}
          {task.text}
        </span>
      </td>
      <td className="flex gap-5">
        <FiEdit
          cursor={"pointer"}
          className="text-blue-500"
          data-testid="edit-button"
          size={25}
          onClick={() => setModalEditOpen(true)}
        />

        {openModalEdit && (
          <Modal
            modalOpen={openModalEdit}
            setModalOpen={setModalEditOpen}
            testId="edit-modal"
          >
            <form onSubmit={handleSubmitEditTodo} data-testid="edit-form">
              <h3 className="font-bold text-lg">Edit Task</h3>
              <div className="modal-action">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                  value={taskToEdit.text}
                  onChange={(event) =>
                    setTaskToEdit((prev) => ({
                      ...prev,
                      text: event.target.value,
                    }))
                  }
                />

                <button type="submit" className="btn" data-testid="">
                  Submit
                </button>
              </div>
            </form>
          </Modal>
        )}

        <FiTrash2
          cursor={"pointer"}
          className="text-red-500"
          size={25}
          data-testid="delete-button"
          onClick={() => setModalDeleteOpen(true)}
        />

        {openModalDelete && (
          <Modal modalOpen={openModalDelete} setModalOpen={setModalDeleteOpen} testId="delete-modal">
            <h3 className="text-lg">
              Are you sure, you want to delete this task?
            </h3>
            <div className="modal-action">
              <button
                data-testid="confirm-delete-button"
                className="btn btn-error"
                onClick={() => handleDeleteTask(task.id)}
              >
                Yes
              </button>
            </div>
          </Modal>
        )}
      </td>
    </tr>
  );
};

export default Task;
