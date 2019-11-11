const FINAL_DEST = 'you have reached your final destination';
const NO_SAIL = 'you cannot set sail from the ocean'
class Ship {
	constructor(name, itinerary) {
		this.name = name,
		this.itinerary = itinerary,
		this.currentPort = itinerary.ports[0],
		this.previousPort = null
		this.finalPort = itinerary.ports[itinerary.ports.length-1];
		this.currentPort.addShip(this);
	};

	setsSail(){
		if(this.currentPort === null){
			throw new Error(NO_SAIL)
		} else {
		this.previousPort = this.currentPort;
		this.currentPort = null;
		this.previousPort.removeShip(this);
		};
	};

	dock(){
		if(this.currentPort === this.finalPort){
			throw new Error(FINAL_DEST)
		} else {
			const itinerary = this.itinerary;
			const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
			this.currentPort = itinerary.ports[previousPortIndex+1];
			this.currentPort.addShip(this);
		}
	}
	

	

}
module.exports = Ship;
