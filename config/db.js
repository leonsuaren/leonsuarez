const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect('mongodb+srv://leonsuarez:leonDB@leondb.f4vv8ya.mongodb.net/?retryWrites=true&w=majority', {
    dbName: 'portfolio'
  });
  console.log('MongoDB Connected');
}

module.exports = connectDB;