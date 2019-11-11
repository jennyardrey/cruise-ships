/* globals describe it expect */
const Ship = require("../src/ship.js")

const Port = require("../src/port.js")
const Itinerary = require("../src/itinerary")

describe('constructor', () => {
	const calais = new Port('Calais');
	const dover = new Port('Dover');
	const itinerary = new Itinerary([calais, dover]);
	const newShip = new Ship('Titanic', itinerary);
	it('returns an object', () => {
		expect(newShip).toBeInstanceOf(Object);
	});
	// console.log(newShip);
	it('has a current port', () => {
		expect(newShip.currentPort).toBe(calais);
	})
});

describe('setSail', () => {
	const dover = new Port('Dover');
	const calais = new Port('Calais');
	const itinerary = new Itinerary([calais, dover]);
	const newShip = new Ship('Titanic', itinerary);
	newShip.setsSail();
	console.log(newShip.previousPort);
	it('sets sail from port', () => {
		expect(newShip.currentPort).toBeFalsy();
		expect(newShip.previousPort.ships).toEqual([]);
	})
	it('throws an error if you try to set sail from the sea', () => {
		expect(() => newShip.setsSail()).toThrowError('you cannot set sail from the ocean');
	})
	
})

describe('dock', () => {
	const dover = new Port('Dover');
	const calais = new Port('Calais');
	const itinerary = new Itinerary([calais, dover]);
	const newShip = new Ship('Titanic', itinerary);
	newShip.setsSail();
	newShip.dock();

	it('can dock at a port', () => {
		expect(newShip.currentPort).toBe(dover);
		expect(newShip.currentPort.ships).toEqual([newShip]);
	})
	it('errors if at final destination', () => {
		expect(() => newShip.dock()).toThrowError('you have reached your final destination');
	})
})

describe('Ship', () => {
	const calais = new Port('Calais');
	const dover = new Port('Dover');
	const itinerary = new Itinerary([calais, dover])
	const newShip = new Ship('Titanic', itinerary)
	// console.log(newShip.currentPort)
	it('gets added to port on instantiation' , () => {
		expect(newShip.currentPort.ships).toEqual([newShip]);
	})
})

