/** @type {import("prettier").Options} */
const config = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  printWidth: 80,
  bracketSpacing: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};

module.exports = config;
