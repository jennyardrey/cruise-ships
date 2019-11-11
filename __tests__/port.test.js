/* globals describe it expect */
const Port = require("../src/port.js")
const Ship = require("../src/ship.js")
const Itinerary = require("../src/itinerary.js")

describe('port', () => {
	it('returns an object', () => {
		expect(new Port('Calais')).toBeInstanceOf(Object);
	})
	const newPort = new Port('Calais');
	it('has the name of the passed port',  () => {
		expect(newPort.name).toBe('Calais');
	})
})

describe('addShip', () => {
	const dover = new Port('Dover');
	const calais = new Port('Calais');
	const newItin = new Itinerary([calais, dover]);
	const newShip = new Ship('Titanic', newItin);
	calais.addShip(newShip);
	it('adds a ship that is docked to its ships property',  () => {
		expect(calais.ships).toEqual([newShip]);
	})
})

describe('removeShip', () => {
	const dover = new Port('Dover');
	const calais = new Port('Calais');
	const newItin = new Itinerary([calais, dover]);
	const newShip = new Ship('Titanic', newItin);
	calais.addShip(newShip);
	calais.removeShip(newShip);
	it('removes a ship that is no longer docked', () => {
		expect(calais.ships).toEqual([]);
	})
})




/* const dover = new Port('Dover');
	const calais = new Port('Calais');
	const newItin = new Itinerary([calais, dover]);
	const newShip = new Ship('Titanic', newItin); */