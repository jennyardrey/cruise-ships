/* globals describe it expect */
const Port = require("../src/port.js")

describe('port', () => {
	it('returns an object', () => {
		expect(new Port('Calais')).toBeInstanceOf(Object);
	})
	const newPort = new Port('Calais');
	it('has the name of the passed port',  () => {
		expect(newPort.name).toBe('Calais');
	})
})