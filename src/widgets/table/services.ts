import { User } from "./types";

const API_BASE_URL = "http://localhost:3002";

export const getUsers = async (): Promise<User[]> => {
  const data = await fetch(`${API_BASE_URL}/users`);
  return data.json();
};
