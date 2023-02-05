const dbConnect = require('./connect');
const {TodoSchema} = require('./schema');


const db = dbConnect();

// 创建表模型
const TodoModel = db.model('Todo', TodoSchema);

TodoModel.create({
  title: 'First todo',
  content: 'Do the first todo in the whole day'
});


module.exports = {
  TodoModel
}