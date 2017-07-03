// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   "_id": new ObjectID("5959f427e6863a011d886b8a")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to find todos', err);
  //   }
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to find todos', err);
  //   }
  // });


  db.collection('Users').find({
    name: 'Mike'
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err, result) => {
    if (err) {
      return console.log("Unable to find user with name Andrew", err);
    }
  })
});
