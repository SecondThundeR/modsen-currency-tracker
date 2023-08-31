/** @type {import("prettier").Options} */
const config = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  printWidth: 80,
  bracketSpacing: true,
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx"],
  importOrderTypeScriptVersion: "5.0.0",
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
};

module.exports = config;
