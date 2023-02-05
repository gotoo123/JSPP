const {Router} = require('express');
const bodyParser = require('body-parse');

const router = new Router();
// 解析body数据
const jsonParser = bodyParser.json();

// 页面路由
router.get('/', () => {});

// 详情页路由
router.get('/detail/:id', () => {});

// 操作
router.post('/add_todo', jsonParser, () => {})
router.post('/toggle_todo', jsonParser, () => {})
router.post('/remove_todo', jsonParser, () => {})

module.exports = router;