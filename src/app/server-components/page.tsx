import { translationApi } from "@/widgets/server-components/services";
import { TodoList } from "@/widgets/server-components/todo-list";

export default async function ServerComponents() {
  const translation = await translationApi.fetchTranslations();

  return <TodoList translations={translation.en} />;
}
