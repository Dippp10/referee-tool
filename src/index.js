const compare = require("./comparator");

const userConstraints = {
  learning_curve: "easy",
  budget: "low"
};

const result = compare("React", "Vue", userConstraints);

console.log("Comparison Result:");
console.log(JSON.stringify(result, null, 2));
