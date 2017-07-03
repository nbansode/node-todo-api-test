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

  db.collection('Users').deleteMany({
    name: 'Andrew'
  }).then((result) => {
    console.log(result);
  });

  // db.collection('Todos').deleteOne({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5959fa17e6863a011d886df6")
  }).then((result) => {
    console.log(JSON.stringify(result,undefined,2));
  });

});
