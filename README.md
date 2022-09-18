# `@guilhermedeandrade/prettier-config`

> My personal [Prettier](https://prettier.io) config 💫

## Usage

**Install**:

```sh
npm i -D @guilhermedeandrade/prettier-config
```

```sh
yarn add -D @guilhermedeandrade/prettier-config
```

**Usage**:

On the root of the repository you want to use this configuration:

```console
touch .prettierrc.json
echo "@guilhermedeandrade/prettier-config" >> .prettierrc.json
```

In case you want to override it you should import the file in a `.prettierrc.js` and export the modifications, e.g:
```js
module.exports = {
  ...require("@guilhermedeandrade/prettier-config"),
  semi: true,
};
```
