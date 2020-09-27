"use strict";

const data = require("./src/data.json");

const convertToLowerCase = (value) => value.toLowerCase().trim();
const searchItem = (value) => data.find(item => convertToLowerCase(item.state) === convertToLowerCase(value));

module.exports = {
  all: () => data,
  senatorialDistricts: (state) => {
    let _state = convertToLowerCase(state);

    if (!state || _state === "") {
      throw new Error('Oops! That\'s not a valid State.');
    }

    if (['fct', 'f.c.t', 'abuja', 'f c t'].includes(state)) {
      _state = 'FCT'
    }

    const response = searchItem(_state);
    return response.senatorial_districts;
  },
  capital: (state) => {
    let _state = convertToLowerCase(state);

    if (!state || _state === "") {
      throw new Error('Oops! That\'s not a valid State.');
    }

    const response = searchItem(_state);
    return response.capital;
  },
  lgas: (state) => {
    let _state = convertToLowerCase(state);

    if (!state || _state === "") {
      throw new Error('Oops! That\'s not a valid State.');
    }

    const response = searchItem(_state);
    return response.lgas;
  },
};
