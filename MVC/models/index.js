const {readFile} = require('../libs/utils.js');

function getListData() {
  const data = readFile('../data/data.json')
  const title = data.titles.index;
  const list = data.list.map(({id, name}) => ({id, name}))

  return {
    title,
    list
  };
}

function getDetailData(id) {
  const data = readFile('../data/data.json')
  const title = data.titles.detail;
  const student = data.list.find(item => item.id === id);

  return {
    title,
    student
  }
}

module.exports = {
  getListData,
  getDetailData
}