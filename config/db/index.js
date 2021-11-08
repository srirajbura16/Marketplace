//Mongoose connection
const mongoose = require('mongoose');
const mongoDB = process.env.DB_HOST;
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to mongoDB'))
  .catch((err) => console.log(err));

const db = mongoose.connection;
module.exports = db;
