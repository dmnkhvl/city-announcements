module.exports = {
  // Your Prettier configurations
  printWidth: 100,
  semi: false,
  singleQuote: true,
  arrowParens: "always",
  trailingComma: "es5",
  bracketSpacing: true,

  // Import order configurations
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: false,

  // Plugins (TailwindCSS Prettier plugin)
  plugins: [require("prettier-plugin-tailwindcss")],
}
