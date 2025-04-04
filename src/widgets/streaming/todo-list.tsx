"use client";
import { use, useState } from "react";
import { Todo, todoApi, Translation } from "./services";

export const TodoList = ({
  todosPromise,
  translationsPromise,
}: {
  todosPromise: Promise<Todo[]>;
  translationsPromise: Promise<Translation>;
}) => {
  const translations = use(translationsPromise);
  const [todos, setTodos] = useState<Todo[]>(use(todosPromise));
  const [newTodo, setNewTodo] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "succeeded" | "failed"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const handleAddTodo = async (text: string) => {
    try {
      setStatus("loading");
      const newTodo = await todoApi.addTodo({
        text,
        completed: false,
      });
      setTodos((prev) => [...prev, newTodo]);
      setStatus("succeeded");
    } catch (err) {
      setStatus("failed");
      setError(err instanceof Error ? err.message : "Failed to add todo");
    }
  };

  const handleToggleTodo = async (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) {
      setError("Todo not found");
      return;
    }

    try {
      await todoApi.updateTodo(id, {
        completed: !todo.completed,
      });
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to toggle todo");
    }
  };

  const handleRemoveTodo = async (id: number) => {
    try {
      await todoApi.deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to remove todo");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      await handleAddTodo(newTodo.trim());
      setNewTodo("");
    }
  };

  return (
    <div className="max-w-[800px] my-0 mx-auto p-5">
      <div className="flex justify-between items-center mb-5">
        <h1>{translations.todoList}</h1>
        {error && (
          <div className="text-center text-red-400 mt-5 p-2.5 bg-gray-100 border border-gray-400 rounded-sm">
            {error}
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2.5 mb-5">
        <input
          type="text"
          className="basis-1 p-2 bg-gray-100 border border-gray-400 rounded-sm text-base"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          disabled={status === "loading"}
        />
        <button
          type="submit"
          className="py-2 px-4 bg-gray-100 border border-gray-400 rounded-sm text-base cursor-pointer"
          disabled={status === "loading"}
        >
          {translations.addTodo}
        </button>
      </form>
      <ul className="list-none p-0 m-0">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2.5 border-b border-b-gray-400"
          >
            <label className="flex items-center gap-2.5 basis-1">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
                className="w-5 h-5 cursor-pointer"
                disabled={status === "loading"}
              />
              <span
                className={todo.completed ? "line-through text-gray-400" : ""}
              >
                {todo.text}
              </span>
            </label>
            <button
              onClick={() => handleRemoveTodo(todo.id)}
              className="py-2 px-4 bg-gray-100 border border-gray-400 rounded-sm text-base cursor-pointer"
              disabled={status === "loading"}
            >
              {translations.remove}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
