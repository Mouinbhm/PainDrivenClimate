const assert = require('assert');
const main = require('../src/main');

describe('Climate Simulation Tests', () => {
    it('should calculate the total emissions correctly', () => {
        let countries = [
            { name: "France", emissions: 300 },
            { name: "USA", emissions: 5000 },
            { name: "China", emissions: 9000 }
        ];
        let totalEmissions = main.calculateTotalEmissions(countries);
        assert.strictEqual(totalEmissions, 14300);
    });

    it('should generate a correct climate message for high emissions', () => {
        let message = main.generateClimateMessage(14300);
        assert.strictEqual(message, "Le climat est en détresse, il est temps de se réveiller!");
    });

    it('should generate a correct climate message for stable emissions', () => {
        let message = main.generateClimateMessage(8000);
        assert.strictEqual(message, "Le climat est stable, mais il faut agir rapidement!");
    });
});
