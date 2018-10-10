module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
     "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
     "react/prefer-stateless-function": 0,
     "react/prop-types": 0,
     "no-underscore-dangle": 0,
     "func-names": 0,
       "arrow-body-style": [2, "always"],
       "prefer-destructuring": 0,
       "no-console": 1,
       "max-len": ["error", { "code": 120, "ignoreComments": true }],
    }
  };
  