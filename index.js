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
  states: () => {
    let stateList = [];
    data.map(({state}) => stateList.push(state));
    
    return stateList;
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
  senatorial_lcdas: (state, senatorialDistrict) => {
    let _state = convertToLowerCase(state);
    let _senatorialDistrict = convertToLowerCase(senatorialDistrict);

    if (!state || !senatorialDistrict) {
      throw new Error('You must enter a state and senatorial district.');
    }

    const response = searchItem(_state);

    return response.senatorial_lcdas && response.senatorial_lcdas[_senatorialDistrict] || ['No LCDAs yet'];
  },
};
