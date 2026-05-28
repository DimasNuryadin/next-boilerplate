import { ROUTES } from "./constants";

export type NavItem = {
  label: string;
  href: string;
  disabled?: boolean;
};

export const mainNavigation: NavItem[] = [
  { label: "Home", href: ROUTES.home },
  { label: "Dashboard", href: ROUTES.dashboard },
  { label: "Profile", href: ROUTES.profile },
];

export const authNavigation: NavItem[] = [
  { label: "Login", href: ROUTES.login },
  { label: "Register", href: ROUTES.register },
];
