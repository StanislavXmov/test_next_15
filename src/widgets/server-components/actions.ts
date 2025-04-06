import { revalidatePath } from "next/cache";
import { todoApi } from "./services";

export async function addTodo(formData: FormData) {
  "use server";
  const text = formData.get("newTodo") as string;
  if (text.trim()) {
    await todoApi.addTodo({
      text: text.trim(),
      completed: false,
    });
    revalidatePath("/");
  }
}

export async function toggleTodo(id: number) {
  "use server";
  const todo = await todoApi.getTodo(id);
  if (todo) {
    await todoApi.updateTodo(id, {
      completed: !todo.completed,
    });
    revalidatePath("/");
  }
}

export async function removeTodo(id: number) {
  "use server";
  await todoApi.deleteTodo(id);
  revalidatePath("/");
}
