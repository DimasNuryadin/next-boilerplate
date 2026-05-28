import { User } from "@/types/common";
import { atom } from "jotai";

export const userAtom = atom<User | null>(null);
export const isAuthenticatedAtom = atom((get) => get(userAtom) !== null);
