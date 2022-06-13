/* eslint-env node */
module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  rules: {
    'vue/multi-word-component-names': 0,
  },
  "env": {
    "vue/setup-compiler-macros": true
  },
  "overrides": [
    {
      "env": {
        "jest/globals": true
      },
      "files": [
        "**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}",
        "cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"
      ],
      "extends": [
        "plugin:cypress/recommended"
      ],
    }
  ]
}
