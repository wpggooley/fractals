var dragon = new LSystem();

dragon.addAlphabet("X");
dragon.addAlphabet("Y");
dragon.addAlphabet("F");
dragon.addAlphabet("+");
dragon.addAlphabet("-");


dragon.setAxiom("FX");

dragon.addProduction("X", "X+YF+");
dragon.addProduction("Y", "-FX-Y");
dragon.addProduction("F", "F");
dragon.addProduction("+", "+");
dragon.addProduction("-", "-");


dragon.draw = function() {
  var vector = {x: 10, y: 0};
  var current = {x: window.innerWidth, y: window.innerHeight};
  var hold;
  ctx.moveTo(current.x, current.y);
  for (i = 0; i < dragon.axiom.length; i++){
    switch(dragon.axiom.charAt(i)) {
      case "F":
        ctx.lineTo(current.x + vector.x, current.y + vector.y);
        current.x += vector.x;
        current.y += vector.y;
        break;
      case "-":
        hold = vector.x;
        vector.x = vector.x * Math.cos(Math.PI/2) - vector.y * Math.sin(Math.PI/2);
        vector.y = hold * Math.sin(Math.PI/2) + vector.y * Math.cos(Math.PI/2);
        break;
      case "+":
        hold = vector.x;
        vector.x = vector.x * Math.cos(-Math.PI/2) - vector.y * Math.sin(-Math.PI/2);
        vector.y = hold * Math.sin(-Math.PI/2) + vector.y * Math.cos(-Math.PI/2);
        break;
      default:
        break;
    }
  }
  ctx.stroke();
}

dragon.reset = function() {
  dragon.setAxiom("FX");
}
