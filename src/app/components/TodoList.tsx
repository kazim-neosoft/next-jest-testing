import React from "react";
import { ITask } from "../../../types/tasks";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
  getTodosData:()=>any;
}

const TodoList: React.FC<TodoListProps> = ({ tasks,getTodosData}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task) => <Task key={task.id} task={task} getTodosData={getTodosData}/>)}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
