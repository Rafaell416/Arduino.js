var five = require('johnny-five');
var board = new five.Board();

board.on("ready", function() {

	var muñeca = new five.Servos([{
		  pin: 9, //puerto digital
		  //center: false, //empezar desde el centro o no
		  range: [110, 180], //rango de movimiento
		 // startAt: // posición inicial
		}]);

	var codo = new five.Servos([{
		pin: 11,
		//center: false,
		range: [30, 180],
		startAt: 140
	}]);

	var hombro = new five.Servos([{
		pin: 13,
		//center: false,
		range: [0, 180],
		//startAt: 180
	}]);

	var brazo = new five.Servos([hombro, codo, muñeca]);
	
		
		/*codo.to(140, 3000);
		//muñeca.to(150, 2000);
		muñeca.to(180, 2000);
		hombro.to(180, 3000);
		hombro.to(90, 2000);
		hombro.to(180, 2000);
		codo.to(140, 3000);
		*/


		/*
			
			
			hombro.to(90, 4000);
			muñeca.to(0, 4000);
				codo.to(50, 4000);
					//muñeca.to(180, 2000);
						codo.to(140, 4000);
							hombro.to(180, 4000);
		
	
	

		*/



			codo.to(140, 4000);
			hombro.to(110, 4000);

});




	
	

  