var arrowhead = new LSystem();

arrowhead.addAlphabet("A");
arrowhead.addAlphabet("B");
arrowhead.addAlphabet("+");
arrowhead.addAlphabet("-");


arrowhead.setAxiom("A");


arrowhead.addProduction("A", "+B-A-B+");
arrowhead.addProduction("B", "-A+B+A-");
arrowhead.addProduction("+", "+");
arrowhead.addProduction("-", "-");





arrowhead.draw = function() {
  var vector = {x: 10, y: 0};
  var current = {x: 0, y: canvas.height - 5};
  var hold;
  ctx.moveTo(current.x, current.y);
  for (i = 0; i < arrowhead.axiom.length; i++){
    switch(arrowhead.axiom.charAt(i)) {
      case "A":
        ctx.lineTo(current.x + vector.x, current.y + vector.y);
        current.x += vector.x;
        current.y += vector.y;
        break;
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

arrowhead.reset = function() {
  arrowhead.setAxiom("A");
}
