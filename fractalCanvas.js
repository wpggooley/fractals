var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

// Start listening to resize events and draw canvas.
initialize();

function initialize() {
   window.addEventListener("resize", resizeCanvas, false);
   resizeCanvas();
}

// Display custom canvas. In this case it's a blue, 5 pixel
// border that resizes along with the browser window.
function redraw() {
}

// Runs each time the DOM window resize event fires.
// Resets the canvas dimensions to match window,
// then draws the new borders accordingly.
function resizeCanvas() {
    canvas.width = window.innerWidth * 3;
    canvas.height = window.innerHeight * 3;
    redraw();
}
