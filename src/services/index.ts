import { apiClient } from "@/lib/api-client";

export const userService = {
  getAll: () => apiClient.GET("/users"),
  getById: (id: number) =>
    apiClient.GET("/users/{id}", {
      params: { path: { id } },
    }),
};

export const postService = {
  getAll: () => apiClient.GET("/posts"),
  getById: (id: number) =>
    apiClient.GET("/posts/{id}", {
      params: { path: { id } },
    }),
};
