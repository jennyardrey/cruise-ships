class Ship {
	constructor(name, startingPort) {
		this.name = name,
		this.startingPort = startingPort
	
	};
	setsSail(){
		this.startingPort = null;
	}

}
module.exports = Ship;
	// this.ports = [startingPort];
/* 
	dock(port){
		this.ports.push(port);
	} */