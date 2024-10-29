const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect('mongodb+srv://leonsuarez:leonDB@leondb.f4vv8ya.mongodb.net/?retryWrites=true&w=majority', {
    dbName: 'portfolio'
  }).then(() => {
    console.log('MongoDB Connected');
  }).catch((err) => {
    console.error(err);
  })
}

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection Error: ', error)
});

mongoose.connection.on('disconnect', () => {
  console.warn('MongoDB disconnect.')
});

module.exports = connectDB;