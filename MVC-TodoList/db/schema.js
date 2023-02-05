const {Schema} = require('mongoose');

const TodoSchema = new Schema({
  title: String,
  content: String,
  completed: {
    type: Boolean,
    default: false
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = {
  TodoSchema
}