import { addTodo, removeTodo, toggleTodo } from "./actions";
import { LoremIpsum } from "./lorem-ipsum";
import { RemoveButton } from "./remove-button";
import { todoApi, Translation } from "./services";

export async function TodoList({
  translations,
}: {
  translations: Translation;
}) {
  const todos = await todoApi.fetchTodos();

  return (
    <div className="max-w-[800px] my-0 mx-auto p-5">
      <div className="flex justify-between items-center mb-5">
        <h1>{translations.todoList}</h1>
      </div>
      <form action={addTodo} className="flex gap-2.5 mb-5">
        <input
          type="text"
          name="newTodo"
          className="basis-1 p-2 bg-gray-100 border border-gray-400 rounded-sm text-base"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-gray-100 border border-gray-400 rounded-sm text-base cursor-pointer"
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
            <form
              action={toggleTodo.bind(null, todo.id)}
              className="flex items-center gap-2.5"
            >
              <button
                type="submit"
                className={`w-5 h-5 cursor-pointer border border-gray-400 rounded-sm ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
                aria-label={`Mark "${todo.text}" as ${
                  todo.completed ? "incomplete" : "complete"
                }`}
              />
              <span
                className={todo.completed ? "line-through text-gray-400" : ""}
              >
                {todo.text}
              </span>
            </form>
            <RemoveButton action={removeTodo.bind(null, todo.id)} />
          </li>
        ))}
      </ul>
      <LoremIpsum />
    </div>
  );
}
