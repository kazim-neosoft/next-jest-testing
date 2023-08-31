"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "../../api";

export default function Home() {
  // const tasks = await getAllTodos();
  const [tasks, setTasks] = useState<any>();

  const getTodosData = async () => {
    const tasksData = await getAllTodos();
    setTasks(tasksData);
  };

  useEffect(() => {
    getTodosData();
  }, []);

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo List App</h1>
        {tasks?.length >= 0 && (
          <>
            <AddTask getTodosData={getTodosData}/>
            <TodoList tasks={tasks} getTodosData={getTodosData} />
          </>
        )}
      </div>
    </main>
  );
}
