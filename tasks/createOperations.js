const { arrayOfPeople } = require("../data.js");
const Person = require("../model/personModel.js");

// create one new person form the person model
const createPerson = async () => {
  try {
    new Person({
      name: "Gerald",
      age: 20,
      favouriteFoods: ["rice", "beans", "jollof"],
    })
      .save()
      .then((userDetail) => console.log("User Created:", userDetail));
  } catch (error) {
    console.error(error);
  }
};

// creating several other people from array of people stored in data.js
const createPeople = async () => {
  try {
    Person.create(arrayOfPeople)
      .then((userDetail) =>
        console.log("The following users have been created:", userDetail)
      )
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(error);
  }
};

module.exports = { createPeople, createPerson };
