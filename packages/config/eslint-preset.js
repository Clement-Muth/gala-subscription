module.exports = {
  extends: ["next", "prettier"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"]
    }
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    semi: true,
    trailingComma: "none",
    singleQuote: false,
    printWidth: 120,
    tabWidth: 2
  }
};
