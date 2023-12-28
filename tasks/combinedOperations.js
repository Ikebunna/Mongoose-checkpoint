const Person = require("../model/personModel");

// Chain Search Query Helpers to Narrow Search Results

const whoLikeburritos = async () => {
  try {
    Person.find({ favoriteFoods: "burritos" }) //find people who like buritos
      .sort("name") //sort by name
      .limit(2) //limit the results to 2 documents
      .select("-age") //hide the age field
      .exec()
      .then((data) => {
        console.log("People who like burritos :", data);
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { whoLikeburritos };
