const mongoose = require("mongoose checkpoint");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("connnection steady");
};

module.exports = connectDB;
