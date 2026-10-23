import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTodos, markTodoAsDone } from "./api";
import type { Todo, TodosResponse } from "./types";

function TodosPage() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 5 * 60 * 1000,
  });

  const queryClient = useQueryClient();
  const markDoneMutation = useMutation({
    mutationFn: markTodoAsDone,
    onMutate: (id) => {
      const previousTodos = queryClient.getQueryData(["todos"]);

      queryClient.setQueryData(["todos"], (todosResponse: TodosResponse) => {
        console.log(todosResponse);
        try {
          return todosResponse.todos?.map((todo: Todo) =>
            todo.id === id ? { ...todo, completed: true } : todo,
          );
        } catch (error) {
          throw error;
        }
      });
      return { previousTodos };
    },
    onSuccess: () => refetch(),
    onError: (_, __, context) => {
      console.error(_);
      queryClient.setQueryData(["todos"], context?.previousTodos);
    },
    onSettled: () => refetch(),
  });

  if (isLoading) {
    return <p>Loading todos...</p>;
  }

  if (isError) {
    return (
      <div>
        <p>Error: {error.message}</p>
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Todos</h1>
      <button
        onClick={() => refetch()}
        className="mt-2 rounded bg-blue-500 px-3 py-1 text-white"
      >
        Refresh
      </button>
      <ul className="mt-4 space-y-2">
        {data?.todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-2 rounded border p-2"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => markDoneMutation.mutate(todo.id)}
            />
            <span
              className={todo.completed ? "line-through text-gray-500" : ""}
            >
              {todo.todo}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodosPage;
