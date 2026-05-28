export const APP_NAME = "Next Boilerplate";

export const ROUTES = {
  home: "/",
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
  profile: "/profile",
} as const;

export const QUERY_KEYS = {
  users: "users",
  posts: "posts",
  comments: "comments",
} as const;

export const PAGINATION = {
  defaultPage: 1,
  defaultLimit: 10,
} as const;
