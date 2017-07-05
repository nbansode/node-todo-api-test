const {
  ObjectID
} = require('mongodb');
const {
  mongoose
} = require('./../server/db/mongoose');
const {
  Todo
} = require('./../server/models/todo');
const {
  User
} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove({
//   _id: "595cbc3b7b72af1d98a47424"
// }).then((todo) => {
//   console.log(todo);
// });
//
// Todo.findByIdAndRemove(id).then((todo) => {
//   console.log(todo);
// });
