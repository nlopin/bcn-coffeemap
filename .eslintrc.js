module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
    },
    "plugins": [
        "@typescript-eslint",
        "react",
    ],
    "rules": {
        "semi": ["error", "never"],
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "detect",
        },
    }
}