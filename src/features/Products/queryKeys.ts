export const productKeys = {
  all: ["products"] as const,
  list: () => [...productKeys.all, "products"] as const,
  details: () => [...productKeys.all, "details"] as const,
  detail: (id: number) => [...productKeys.details(), id] as const,
};
