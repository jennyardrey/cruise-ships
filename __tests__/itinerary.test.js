/* globals describe it expect */
const Itinerary = require("../src/itinerary.js")


describe('Itinerary', () => {
	let dover;
	let calais;
	let ports;
	let itinerary;
	beforeEach(()=>{
		port = {removeShip: jest.fn(), addShip: jest.fn(),};
		calais = { ...port, name : 'Calais', ships: []};
		dover = { ...port, name : 'Dover', ships: []};
		ports = [dover, calais];
		itinerary = new Itinerary(ports);
	})
	it('returns an object', () => {
		expect(new Itinerary()).toBeInstanceOf(Object);
	})
	
	it('has a ports property', () => {
		expect(itinerary.ports).toEqual([dover, calais]);
	})
})