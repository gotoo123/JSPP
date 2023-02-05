const {getListData, getDetailData} = require('../models');

function indexView(req, res) {
  const { title, list } = getListData();

  res.render('index', {
    title,
    list
  })
}

function detailView(req, res) {
  const id = req.params.id;
  const {title, student} = getDetailData(id);

  res.render('detail', {
    title,
    student
  })
}

module.exports = {
  indexView,
  detailView,
}