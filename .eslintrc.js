module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  "extends": ["eslint:recommended","plugin:prettier/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier"
  ],
  "globals": {
    "CACHE_MODE": false
  },
  "parser": "babel-eslint",
  "rules": {
    "no-useless-escape": "off",
    "prettier/prettier": "error",
    "indent": [
      "error",
      4,
      {"SwitchCase": 1}
    ],
    "quotes": [
      "error",
      "single",
      {"avoidEscape": true}
    ],
    "semi": [
      "error",
      "never"
    ],
    "no-case-declarations": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-alert": "error"
  }
}
