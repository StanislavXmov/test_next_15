import { todoApi, translationApi } from "@/widgets/streaming/services";
import { TodoList } from "@/widgets/streaming/todo-list";
import { Suspense } from "react";

export default function Streaming() {
  const todos = todoApi.fetchTodos();
  const translations = translationApi.fetchTranslations().then((r) => r.en);

  return (
    <>
      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            CEO header
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
      </div>

      <Suspense
        fallback={
          <div className="max-w-[800px] h-[800px] my-0 mx-auto p-5 bg-white border border-gray-200 rounded-lg shadow-sm"></div>
        }
      >
        <TodoList todosPromise={todos} translationsPromise={translations} />
      </Suspense>
    </>
  );
}
