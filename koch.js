var koch = new LSystem();

koch.addAlphabet("F");
koch.addAlphabet("+");
koch.addAlphabet("-");

koch.setAxiom("F");

koch.addProduction("F", "F+F-F-F+F");
koch.addProduction("+", "+");
koch.addProduction("-", "-");


koch.draw = function() {
  var vector = {x: 10, y: 0};
  var current = {x: 0, y: canvas.height - 5};
  var hold;
  ctx.moveTo(current.x, current.y);
  for (i = 0; i < koch.axiom.length; i++){
    switch(koch.axiom.charAt(i)) {
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

koch.reset = function() {
  koch.setAxiom("F");
}
