import { GetTestResponse } from "./api-component";

const API_BASE_URL = "http://localhost:3002";

export const getResponse = async (): Promise<GetTestResponse> => {
  const data = await fetch(`${API_BASE_URL}/get-response`);
  return data.json();
};
