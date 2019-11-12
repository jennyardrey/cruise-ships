/* globals describe it expect */
const Ship = require("../src/ship.js")


describe('with ports and itinerarys', () => {
	let calais;
	let dover;
	let itinerary;
	let newShip;
	let port;
	beforeEach(()=> {
		port = {removeShip: jest.fn(), addShip: jest.fn(),};
		calais = { ...port, name : 'Calais', ships: []};
		dover = { ...port, name : 'Dover', ships: []};
		itinerary = {ports:[calais, dover]};
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
		expect(calais.removeShip).toHaveBeenCalled();
		expect(port.removeShip).toHaveBeenCalledWith(newShip);
		expect(() => newShip.setsSail()).toThrowError('you cannot set sail from the ocean');
	})
	
	it('gets added to port on instantiation' , () => {
		expect(port.addShip).toHaveBeenCalledWith(newShip);
	})
	
	it('can dock at a port', () => {
		newShip.setsSail();
		newShip.dock();
		expect(newShip.currentPort).toBe(dover);
		expect(port.addShip).toHaveBeenCalledWith(newShip);
		expect(() => newShip.dock()).toThrowError('you have reached your final destination');
	})
	
});







