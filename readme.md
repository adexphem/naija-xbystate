# naija-xbystate

![npm](https://img.shields.io/npm/v/naija-xbystate?style=plastic)

This package will not just list local government area by state but can also give senatorial districts, capitals e.t.c

## Install

```
$ npm install naija-xbystate
```

## Usage

```js
const naijaXbyState = require("naija-xbystate");

console.log(naijaXbyState.all());
console.log(naijaXbyState.states());
console.log(naijaXbyState.capital("lagos"));
console.log(naijaXbyState.lgas("oyo"))

```