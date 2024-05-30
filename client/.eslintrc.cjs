/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  extends: [
    "plugin:vue/base",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es2020: true
  }
}
