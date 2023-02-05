const {readFileSync} = require('fs');
const {resolve} = require('path');

function readFile(path) {
  const data = JSON.parse(readFileSync(resolve(__dirname, path), 'utf8'));
  return data;
}

module.exports = {
  readFile
}