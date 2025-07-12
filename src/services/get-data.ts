// "use server";

const API_BASE_URL = "http://localhost:3002";

export interface GetData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getData = async (): Promise<GetData[]> => {
  try {
    const data = await fetch(`${API_BASE_URL}/posts`);

    return data.json();
  } catch (error) {
    console.log("ERROR:", error);
    return [];
  }
};
