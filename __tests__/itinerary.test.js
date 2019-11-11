/* globals describe it expect */
const Itinerary = require("../src/itinerary.js")
const Port = require("../src/port.js")

describe('Itinerary', () => {
	it('returns an object', () => {
		expect(new Itinerary()).toBeInstanceOf(Object);
	})
	const dover = new Port('Dover');
	const calais = new Port('Calais');
	const ports = [dover, calais];
	const itinerary = new Itinerary(ports);
	it('has a ports property', () => {
		expect(itinerary.ports).toEqual([dover, calais]);
	})
})