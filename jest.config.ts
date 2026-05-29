import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: ["<rootDir>/src/**/*.test.ts", "<rootDir>/src/**/*.test.tsx", "<rootDir>/__tests__/**/*.test.ts", "<rootDir>/__tests__/**/*.test.tsx"],
  modulePaths: ["<rootDir>/src"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.stories.{ts,tsx}", "!src/types/**"],
};

export default createJestConfig(config);
