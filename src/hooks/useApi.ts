import { QUERY_KEYS } from "@/config/constants";
import { postService, userService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export function useUsers() {
  return useQuery({
    queryKey: [QUERY_KEYS.users],
    queryFn: async () => {
      const { data, error } = await userService.getAll();
      if (error) throw error;
      return data;
    },
  });
}

export function useUser(id: number) {
  return useQuery({
    queryKey: [QUERY_KEYS.users, id],
    queryFn: async () => {
      const { data, error } = await userService.getById(id);
      if (error) throw error;
      return data;
    },
  });
}

export function usePosts() {
  return useQuery({
    queryKey: [QUERY_KEYS.posts],
    queryFn: async () => {
      const { data, error } = await postService.getAll();
      if (error) throw error;
      return data;
    },
  });
}
