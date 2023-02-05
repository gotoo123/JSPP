const {Router} = require('express');
const {indexView, detailView} = require('../controllers')

const router = new Router();

// localhost:8080 -> 解析index.ejs
// localhost:8080/detail/:id -> 解析detail.ejs
router.get('/', indexView);
router.get('/detail/:id', detailView);

module.exports = router;