var five = require("johnny-five");
var keypress = require("keypress");

keypress(process.stdin);

var board = new five.Board();

board.on("ready", function() {

  console.log("Use Up and Down arrows for CW and CCW respectively. Space to stop.");

  var servo = new five.Servo.Continuous(11);

  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.setRawMode(true);

  process.stdin.on("keypress", function(ch, key) {

    if (!key) {
      return;
    }

    if (key.name === "q") {
      console.log("Quitting");
      process.exit();
    } else if (key.name === "up") {
      console.log("CW");
      servo.cw(3000);
    } else if (key.name === "down") {
      console.log("CCW");
      servo.ccw(2000);
    } else if (key.name === "space") {
      console.log("Stopping");
      servo.stop();
    }
  });
});
