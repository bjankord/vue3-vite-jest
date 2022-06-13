/* global module */
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    "!**/node_modules/**",
    "!src/router/**/*.js"
  ],
  coverageDirectory: 'coverage/unit',
  coverageReporters: ['clover', 'json', 'lcov', 'text', 'json-summary'],
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  },
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: [
      'node',
      'node-addons'
    ]
  }
};