var gosper = new LSystem();

gosper.addAlphabet("A");
gosper.addAlphabet("B");
gosper.addAlphabet("+");
gosper.addAlphabet("-");


gosper.setAxiom("A");

gosper.addProduction("A", "A-B--B+A++AA+B-");
gosper.addProduction("B", "+A-BB--B-A++A+B");
gosper.addProduction("+", "+");
gosper.addProduction("-", "-");

gosper.draw = function() {
  var vector = {x: 0, y: 10};
  var current = {x: window.innerWidth, y: window.innerHeight};
  var hold;
  ctx.moveTo(current.x, current.y);
  for (i = 0; i < gosper.axiom.length; i++){
    switch(gosper.axiom.charAt(i)) {
      case "A":
      case "B":
        ctx.lineTo(current.x + vector.x, current.y + vector.y);
        current.x += vector.x;
        current.y += vector.y;
        break;
      case "-":
        hold = vector.x;
        vector.x = vector.x * Math.cos(Math.PI/3) - vector.y * Math.sin(Math.PI/3);
        vector.y = hold * Math.sin(Math.PI/3) + vector.y * Math.cos(Math.PI/3);
        break;
      case "+":
        hold = vector.x;
        vector.x = vector.x * Math.cos(-Math.PI/3) - vector.y * Math.sin(-Math.PI/3);
        vector.y = hold * Math.sin(-Math.PI/3) + vector.y * Math.cos(-Math.PI/3);
        break;
      default:
        break;
    }
  }
  ctx.stroke();
}

gosper.reset = function() {
  gosper.setAxiom("A");
}
