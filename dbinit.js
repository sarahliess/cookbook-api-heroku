const mongoose = require('mongoose');

const connectDB = async () => {
  //console.log(process.env.MONGO_URI)
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(`Mongo DB connected ${conn.connection.host}`.yellow.underline);
}

module.exports = connectDB;