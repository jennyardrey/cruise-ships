/* globals describe it expect */
const Port = require("../src/port.js")
const Ship = require("../src/ship.js")
const Itinerary = require("../src/itinerary.js")


describe('makes ports and has ships', () => {
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
		expect(new Port('Calais')).toBeInstanceOf(Object);
	})

	it('has the name of the passed port',  () => {
		expect(calais.name).toBe('Calais');
	})
	
	
	it('adds a ship that is docked to its ships property',  () => {
		calais.addShip(newShip);
		expect(calais.ships).toContain(newShip);
	})
	
	
	it('removes a ship that is no longer docked', () => {
		calais.removeShip(newShip);
		expect(calais.ships).not.toContain(newShip);
	})
	
	
})
