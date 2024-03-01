// index.js
const axios = require("axios");

function greet(name) {
  return `Hello, ${name}!`;
}

async function request() {
  const result = await axios(
    "https://baconipsum.com/api/?type=meat-and-filler"
  );
  return result.data[0];
}

module.exports = {
  greet,
  request,
};
