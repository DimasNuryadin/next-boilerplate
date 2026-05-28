import { themeAtom, userAtom } from "@/store";
import { atom } from "jotai";

export const isAuthenticatedAtom = atom((get) => get(userAtom) !== null);
export const isDarkAtom = atom((get) => get(themeAtom) === "dark");
