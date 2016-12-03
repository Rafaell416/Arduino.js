/*var five = require('johnny-five');
var circuito = new five.Board();
var bombillo;
var motor;

circuito.on('ready', prender);
*/
/*function prender(){

	bombillo = new five.Led(13);
	bombillo.blink(3000);

	motor = new five.Servo(9);
	motor.to(90);
	ondear();

	function ondear(){

	//console.log();

	//var luz = bombillo.blink();

	if (bombillo.on(true) )
	{
		motor = new five.Servo(9);
		motor.to(0);
	}

	else if( luz = bombillo.on(false) )
	{
		motor = new five.Servo(9);
		motor.to(90);
	}

	setTimeout(ondear, 1000);
}


}

function ondear(){

	//console.log();

	//var luz = bombillo.blink();

	if ()
	{
		motor = new five.Servo(9);
		motor.to(0);
	}

	else if( )
	{
		motor = new five.Servo(9);
		motor.to(90);
	}

	setTimeout(ondear, 1000);
}
*/


var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var servo = new five.Servo(9);

  // Sweep from 0-180 and repeat.
  servo.to(10, 1000);
});
