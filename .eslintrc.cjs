const { eslint } = require("@powerfulyang/lint");

module.exports = {
  ...eslint,
  parserOptions: {
    ...eslint.parserOptions,
    ecmaVersion: 2020,
    sourceType: "module",
  },
};
