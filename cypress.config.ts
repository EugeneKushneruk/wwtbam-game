// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "wwtbam",
  component: {
    specPattern: "app/**/*.cy.{js,jsx,ts,tsx}",
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
  e2e: {
    specPattern: "cypress/tests/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:3000/",
    supportFile: false,
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
