// change color function
var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').className;
	// changing class name
	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red'; }
		else {
			document.getElementById('cool').className = 'cool';
		}
	
}

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