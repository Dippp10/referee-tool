const options = require("./data/options.json");

function compare(optionA, optionB, constraints) {
  const result = {
    optionA: options[optionA],
    optionB: options[optionB],
    recommendation: "",
    tradeOffs: []
  };

  if (constraints.learning_curve === "easy") {
    result.recommendation = optionA === "Vue" ? "Vue" : "React";
    result.tradeOffs.push(
      "Easier learning curve may reduce long-term scalability"
    );
  } else {
    result.recommendation = "React";
    result.tradeOffs.push(
      "Steeper learning curve but better ecosystem and scalability"
    );
  }

  return result;
}

module.exports = compare;
