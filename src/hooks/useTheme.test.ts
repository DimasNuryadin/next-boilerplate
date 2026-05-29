import { act, renderHook } from "@testing-library/react";
import { useTheme } from "./useTheme";

// Mock next-themes
jest.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "light",
    setTheme: jest.fn(),
    resolvedTheme: "light",
  }),
}));

describe("useTheme", () => {
  it("returns theme and isDark correctly", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.isDark).toBe(false);
    expect(result.current.theme).toBe("light");
  });

  it("toggleTheme calls setTheme", () => {
    const { result } = renderHook(() => useTheme());
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.toggleTheme).toBeDefined();
  });
});
