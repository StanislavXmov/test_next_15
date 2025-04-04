const API_BASE_URL = "http://localhost:3001";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface Translation {
  addTodo: string;
  todoList: string;
  loading: string;
  remove: string;
}

export interface Translations {
  en: Translation;
  es: Translation;
  fr: Translation;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const todoApi = {
  async fetchTodos(): Promise<Todo[]> {
    await sleep(500);
    const response = await fetch(`${API_BASE_URL}/todos`);
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    return response.json();
  },

  async addTodo(todo: Omit<Todo, "id">): Promise<Todo> {
    const response = await fetch(`${API_BASE_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    if (!response.ok) {
      throw new Error("Failed to add todo");
    }
    return response.json();
  },

  async updateTodo(id: number, updates: Partial<Todo>): Promise<Todo> {
    const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    });
    if (!response.ok) {
      throw new Error("Failed to update todo");
    }
    return response.json();
  },

  async deleteTodo(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete todo");
    }
  },
};

export const translationApi = {
  async fetchTranslations(): Promise<Translations> {
    await sleep(500);
    const response = await fetch(`${API_BASE_URL}/translations`);
    if (!response.ok) {
      throw new Error("Failed to fetch translations");
    }
    return response.json();
  },
};
