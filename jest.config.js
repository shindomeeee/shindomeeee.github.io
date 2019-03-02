const tsconfig = require("./tsconfig.json");
const moduleNameMapper = require("tsconfig-paths-jest")(tsconfig);

module.exports = {
  roots: ["<rootDir>/tests"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(png|svg|css)$": "jest-transform-stub"
  },
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleNameMapper,
  setupFilesAfterEnv: ["<rootDir>/src/setupEnzyme.ts"]
};
