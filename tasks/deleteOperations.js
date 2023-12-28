const Person = require("../model/personModel");

// delete a person with the specified ID
const deletePerson = async () => {
  const personId = "658dd6e6eb341f1b72b1b3c5";
  try {
    Person.findByIdAndDelete(personId).then((num) =>
      console.log("user deleted", num)
    );
  } catch (error) {
    console.log(error);
  }
};

// remove all persons named Mary

const deleteAllMary = async () => {
  try {
    Person.deleteMany({ name: "Mary" }).then(() =>
      console.log("All Persons named Mary removed")
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deletePerson, deleteAllMary };
