const keystone = require('keystone');
const Mongoose = require('mongoose').Mongoose;

const Types = keystone.Field.Types;

const DuoEntry = new keystone.List('DuoEntry');

DuoEntry.add({
	name: { type: String, required: true, index: true, initial: true },
  title: { type: String, required: true, index: true, initial: true }
});


const duoMongoose = new Mongoose()
  .connect('mongodb://test-user-duo:test-user-duo@127.0.0.1:27017/test-db-duo');

console.log(duoMongoose)

duoMongoose.connection.once('open', function() {
  const k = Object.create(keystone, {
    mongoose: duoMongoose
  })

  DuoEntry.keystone = k

  /**
   * Registration
   */
  DuoEntry.defaultColumns = 'name, title';
  DuoEntry.register();
});
