module.exports = {
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(test).ts?(x)"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|scss|sass|less)$": "identity-obj-proxy",
  },
};
