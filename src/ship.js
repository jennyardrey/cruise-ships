const Port = require("../src/port.js")

class Ship {
	constructor(name, currentPort) {
		this.name = name,
		this.currentPort = currentPort
	
	};
	setsSail(){
		this.currentPort = null;
	}
	dock(newPort){
		this.currentPort = newPort;
	}

}
module.exports = Ship;
	// this.ports = [startingPort];
/* 
	dock(port){
		this.ports.push(port);
	} */