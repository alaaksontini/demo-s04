import axios from "axios";
import type { Todo, TodosResponse } from "./types";

const todosApi = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchTodos = async (): Promise<TodosResponse> => {
  const response = await todosApi.get<TodosResponse>("/todos");
  return response.data;
};

// mark todo as done
export const markTodoAsDone = async (id: number): Promise<Todo> => {
  const response = await todosApi.put(`/todos/${id}`, { completed: true });
  return response.data;
};
