var numCars = 1;
var car = {
	make: 'VW',
	type: 'Polo',
	color: 'blue',
	isRunning: false,
	numberOfWheels: 4,
	seats: [
		'seat1',
		'seat2',
		'seat3',
		'seat4'
	],
	turnOn: function () {
		this.isRunning = true;
	},
	fly: function () {
		alert('flying!');
	},
			
}; // car object

console.log('hello there all my friends!');