var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var redrawnLines = [];

context.lineWidth = 4;

let eventHandlers = {
	"draw": {
		"move": draw,
		"down": enableDrawing,
		"up": disableDrawing,
		"out": disableDrawing,
	},
	"line": {
		"move": dragLine,
		"down": startLine,
		"up": drawLine,
		"out": drawLine,
	},
}

var selectedTool = "draw";

function mouseMove(event) {
	eventHandlers[selectedTool]["move"](event);
}

function mouseDown() {
	eventHandlers[selectedTool]["down"]();
}

function mouseUp() {
	eventHandlers[selectedTool]["up"]();
}

function mouseOut() {
	eventHandlers[selectedTool]["out"]();
}

function setDraw() {
	selectedTool = "draw";
}

function setLine() {
	selectedTool = "line";
}

function increaseThickness() {
    context.lineWidth++;
    console.log(context.lineWidth);
}

function decreaseThickness() {
    if (context.lineWidth > 1) {
        context.lineWidth--;
    }
    console.log(context.lineWidth);
}

// Farbe aus ColorPicker auslesen
var theInput = document.getElementById("kb_selected_color");

var theColor = theInput.value;
theInput.addEventListener("input", function() {

	// Farcode (Hex) schreiben
	document.getElementById("hex").innerHTML = theInput.value;

	// Farbvariable schreiben
	document.documentElement.style.setProperty('--kb-color',theInput.value);

}, false);

function redrawLines() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < redrawnLines.length; i++) {
		redrawLine(redrawnLines[i]);
	}
}

function redrawLine(coords) {
	let startX = coords[0];
	let startY = coords[1];
	let endX = coords[2];
	let endY = coords[3];

	context.beginPath();
	context.moveTo(startX, startY);
	context.lineTo(endX, endY);
	context.stroke();
}
