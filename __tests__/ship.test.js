/* globals describe it expect */
const Ship = require("../src/ship.js")
const Port = require("../src/port.js")
const Itinerary = require("../src/itinerary")

describe('with ports and itinerarys', () => {
	let calais;
	let dover;
	let itinerary;
	let newShip;
	beforeEach(()=> {
		calais = new Port('Calais');
		dover = new Port('Dover');
		itinerary = new Itinerary([calais, dover]);
		newShip = new Ship('Titanic', itinerary);
	})
	
	it('returns an object', () => {
		expect(newShip).toBeInstanceOf(Object);
	});
	it('has a current port', () => {
		expect(newShip.currentPort).toBe(calais);
	})
	
	it('sets sail from port', () => {
		newShip.setsSail();
		expect(newShip.currentPort).toBeFalsy();
		expect(newShip.previousPort.ships).not.toContain(newShip);
		expect(() => newShip.setsSail()).toThrowError('you cannot set sail from the ocean');
	})
	
	it('gets added to port on instantiation' , () => {
		expect(newShip.currentPort.ships).toContain(newShip);
	})
	
	it('can dock at a port', () => {
		newShip.setsSail();
		newShip.dock();
		expect(newShip.currentPort).toBe(dover);
		expect(newShip.currentPort.ships).toContain(newShip);
		expect(() => newShip.dock()).toThrowError('you have reached your final destination');
	})
	
});







