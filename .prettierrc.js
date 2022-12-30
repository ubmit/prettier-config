module.exports = {
  plugins: [
    // relative paths are usually required so Prettier can find the plugin
    "./node_modules/prettier-plugin-multiline-arrays",
  ],
  arrowParens: "avoid",
  bracketSpacing: false,
  semi: false,
  singleQuote: true,
  trailingComma: "all",
};
