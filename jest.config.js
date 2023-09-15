module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "\\.(png|jpg)$": "jest-transform-stub",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/form/**/*.{ts,tsx}",
    "src/components/ui/**/*.{ts,tsx}",
    "src/components/map/**/*.{ts,tsx}",
  ],
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jsdom",
};
