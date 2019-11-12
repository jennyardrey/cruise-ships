class Port {
	constructor(name) {
		this.name = name;
		this.ships = []
	};

	addShip(ship){
	
		this.ships.push(ship);

	}

	removeShip(ship){
		const exShipIndex = this.ships.indexOf(ship);
		const ships = this.ships;
		console.log(exShipIndex);
		ships.splice(exShipIndex, 1);
	}
};



module.exports = Port;