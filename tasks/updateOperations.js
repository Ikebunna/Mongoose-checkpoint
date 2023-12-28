const Person = require("../model/personModel");

// Classic Updates by Running Find, Edit, then Save

const updateFavFood = async () => {
  const personId = "658dd6e6eb341f1b72b1b3c4";
  try {
    Person.findById(personId).then((person) => {
      person.favouriteFoods.push("Hamburger");
      person
        .save()
        .then(() =>
          console.log(`Hamburger added to ${person.name}'s favourite food`)
        );
    });
  } catch (error) {
    console.error(error);
  }
};

// New update using findOneAndUpdate()

const updatePersonAge = async () => {
  const personName = "Gerald";
  try {
    Person.findOneAndUpdate(
      { name: personName },
      { age: 20 },
      { new: true }
    ).then(() => console.log("age updated"));
  } catch (error) {
    console.error(error);
  }
};

module.exports = { updateFavFood, updatePersonAge };
