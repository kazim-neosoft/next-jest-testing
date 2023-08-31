import { ITask } from "../types/tasks";

export const getAllTodos = async () => {
    return [
      { id: '1', text: 'Todo 1', isDone: false },
      { id: '2', text: 'Todo 2', isDone: true },
    ];
  };
  
  export const addTodo = async (todo:ITask) => {
    return { ...todo, id: 'new-id' };
  };
  
  export const updateTodo = async (todo:ITask) => {
    return { ...todo };
  };
  
  export const deleteTodo = async (id:string) => {
  };