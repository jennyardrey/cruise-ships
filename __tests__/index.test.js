/* globals describe it expect */
const Ship = require("../src/index.js")

describe('constructor', () => {
	it('returns an object', () => {
		expect(new Ship('Titanic')).toBeInstanceOf(Object);
	});
	const newShip = new Ship('Titanic', 'Dover');
	it('has a starting port', () => {
		expect(typeof newShip.startingPort).toBe('string');
		expect(newShip.startingPort).toBe('Dover');
	})
});