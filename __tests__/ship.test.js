/* globals describe it expect */
const Ship = require("../src/ship.js")
const Port = require("../src/port.js")

describe('constructor', () => {
	it('returns an object', () => {
		expect(new Ship('Titanic')).toBeInstanceOf(Object);
	});
	const newPort = new Port('Calais');
	const newShip = new Ship('Titanic', newPort);

	it('has a current port', () => {
		expect(newShip.currentPort).toBe(newPort);
	})
});

describe('setSail', () => {
	const newPort = new Port('Calais');
	const newShip = new Ship('Titanic', newPort);
	newShip.setsSail();
	it('sets sail from port', () => {
		expect(newShip.currentPort).toBeFalsy();
	})
})

describe('dock', () => {
	const dover = new Port('Dover');
	const newShip = new Ship('Titanic', dover);
	const calais = new Port('Calais');
	newShip.dock(calais);
	it('checks that ships can dock at ports',  () => {
		expect(newShip.currentPort).toBe(calais);
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