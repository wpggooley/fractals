// represents a Lindenmayer System
function LSystem() {
  // universal set maybe?
  this.alphabet = new Array();    // the alphabet
  this.axiom = "";                // the starting string
  this.productions = {};          // the rules for replacement

  // adds a symbol to the alphabet
  this.addAlphabet = function (symbol) {
    if(typeof symbol === "string" && // is a string
        symbol.length == 1 && // is length 1
        !this.alphabet.includes(symbol)) { // is not in alphabet already
          this.alphabet.push(symbol);      // add to alphabet
    }
  }

  // sets the axiom
  this.setAxiom = function (axiom) {
    // ensure all symbols in axiom are in alphabet
    var aValid = true;
    for (var i = 0; i < axiom.length; i++) {
      if (!this.alphabet.includes(axiom.charAt(i))) {
        aValid = false;
      }
    }
    if(aValid) {
      this.axiom = axiom; // set the axiom
    }
  }

  // adds as production to the productions map
  this.addProduction = function (symbol1, symbol2) {
    if(this.alphabet.includes(symbol1)){ // symbol1 is in alphabet
      var s2Valid = true;
      for (var i = 0; i < symbol2.length; i++) {
        if (!this.alphabet.includes(symbol2.charAt(i))) { // all symbols in symbol 2 in alphabet
          s2Valid = false;
        }
      }
      if(s2Valid) {
        this.productions[symbol1] = symbol2;  // map symbol1 to symbol2
      }
    }
  }

  // steps the iteration
  this.step = function () {
    var s = "";
    for(var i = 0; i < this.axiom.length; i++) {
      s += this.productions[this.axiom.charAt(i)];
    }
    this.axiom = s;
  }

  // generates fractal by iterating "steps" times
  this.iterate = function(steps) {
    for(var i = 0; i < steps; i++) {
      console.log(this.axiom);
      this.step();
    }
  }

  // clears the canvas and then iterates and then draws the new fractal
  this.redraw = function() {
    resizeCanvas();
    this.reset();
    console.log(document.getElementById("iterations").value)
    this.iterate(document.getElementById("iterations").value);
    this.draw();
  }
}
