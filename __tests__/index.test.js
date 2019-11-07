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

describe('setSail', () => {
	const newShip = new Ship('Titanic', 'Dover');
	newShip.setsSail();
	it('sets sail from port', () => {
		expect(newShip.startingPort).toBeFalsy();
	})
})

/* describe('setSail', () => {
	const newShip = new Ship('Titanic', 'Dover');
	it('sets sail from a port', () => {
		expect(newShip.ports).toBeInstanceOf(Array);
		newShip.setSail('Portsmouth');
		expect(newShip.ports).toEqual(['Dover', 'Portsmouth'])
	})
	
}) */