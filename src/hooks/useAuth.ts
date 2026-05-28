import { userAtom } from "@/store/atoms/auth";
import { isAuthenticatedAtom } from "@/store/derived";
import type { User } from "@/types/common";
import { useAtom } from "jotai";

export function useAuth() {
  const [user, setUser] = useAtom(userAtom);
  const [isAuthenticated] = useAtom(isAuthenticatedAtom);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return { user, isAuthenticated, login, logout };
}
