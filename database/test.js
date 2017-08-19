const assert = require('assert')
const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/mall'

mongoClient.connect(url, (err, db) => {
  assert.equal(null, err)

  console.log('Connected correctly to server.', db.databaseName);

  db.close()
})