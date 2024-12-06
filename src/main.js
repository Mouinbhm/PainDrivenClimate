function calculateTotalEmissions(countries) {
  return countries.reduce((total, country) => total + country.emissions, 0);
}

function generateClimateMessage(totalEmissions) {
  if (totalEmissions > 10000) {
    return "Le climat est en détresse, il est temps de se réveiller!";
  } else {
    return "Le climat est stable, mais il faut agir rapidement!";
  }
}

module.exports = { calculateTotalEmissions, generateClimateMessage };
