# vue3+vite+jest

This template is exploratory in nature trying to figure out the needed setup to get Vue 3, Vite, Vue Test Utils, Jest, and code coverage working.
This repo was initialized by running `npm init vue@latest`

* Jest has been set up to compile with babel-jest.
* This project has a sample test for a SFC component, a multi-file component, and a pinia store that all pass.
* Code coverage however is not properly working in this setup at the moment.
  * Code coverage is collected for the SFC component and the store code but not the multi-file component.
  * There is an issue logged to Jest for this here: https://github.com/facebook/jest/issues/12937

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit # or `npm run test:unit:ci` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
