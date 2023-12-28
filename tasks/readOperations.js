const Person = require("../model/personModel");

// find person named onyi and log her details
const findPersonByName = async () => {
  try {
    await Person.find({ name: "Onyi" }).then((userDetail) =>
      console.log("users found: ", userDetail)
    );
  } catch (error) {
    console.error(error);
  }
};
// find the first person who likes tuwo as favourite food

const findOnePersonByFavFood = async () => {
  try {
    await Person.findOne({ favouriteFoods: "tuwo" })
      .then((userDetail) =>
        console.log("first user who likes tuwo : ", userDetail)
      )
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
};

// find person by id

const findOnePersonById = async () => {
  try {
    await Person.findById("658dd4364dabf608926caea6")
      .then((userDetail) => console.log("user with provided id : ", userDetail))
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  findPersonByName,
  findOnePersonByFavFood,
  findOnePersonById,
};
