var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var redrawnLines = [];
var redrawnRects = [];
var redrawnEllipses = [];

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
	"rect": {
		"move": dragRect,
		"down": startRect,
		"up": drawRect,
		"out": drawRect,
	},
	"ellipse": {
		"move": dragEllipse,
		"down": startEllipse,
		"up": drawEllipse,
		"out": drawEllipse,
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

function setRect() {
	selectedTool = "rect";
}

function setEllipse() {
	selectedTool = "ellipse";
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

function redrawLines() { //TODO rename
	context.clearRect(0, 0, canvas.width, canvas.height);

	redrawnLines.forEach(line => redrawLine(line));
	redrawnRects.forEach(rect => redrawRect(rect));
	redrawnEllipses.forEach(ellipse => redrawEllipse(ellipse));
}

function redrawLine(line) {
	let startX = line.coords[0];
	let startY = line.coords[1];
	let endX = line.coords[2];
	let endY = line.coords[3];

	setStyle(line);

	context.beginPath();
	context.moveTo(startX, startY);
	context.lineTo(endX, endY);
	context.stroke();

	resetStyle();
}

function redrawRect(rect) {
	let x = rect.coords[0];
	let y = rect.coords[1];
	let width = rect.coords[2];
	let height = rect.coords[3];

	setStyle(rect),

	context.beginPath();
	context.rect(x, y, width, height);
	context.stroke();

	resetStyle();
}

function redrawEllipse(ellipse) {
	let x = ellipse.coords[0];
	let y = ellipse.coords[1];
	let major = ellipse.coords[2];
	let minor = ellipse.coords[3];

	setStyle(ellipse);

	context.beginPath();
	context.ellipse(x, y, major, minor, 0, 0, 2 * Math.PI);
	context.stroke();

	resetStyle(ellipse);
}

var oldStroke;
var oldHex;

function setStyle(element) {
	oldStroke = context.lineWidth;
	oldHex = context.strokeStyle;
	context.lineWidth = element.stroke;
	context.strokeStyle = element.hex;
}

function resetStyle(element) {
	context.lineWidth = oldStroke;
	context.strokeStyle = oldHex;
}