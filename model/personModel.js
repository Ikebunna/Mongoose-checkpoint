const mongoose = require("mongoose checkpoint");
const { Schema } = mongoose;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favouriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
