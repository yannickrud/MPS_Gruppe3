var originX = -1;
var originY = -1;

var setOrigin = false;
var doDrag = false;

var currentLine;

function dragLine(event) {
	var x = event.clientX - canvas.offsetLeft;
	var y = event.clientY - canvas.offsetTop;

	let hex = document.getElementById("hex").innerHTML;

	if (setOrigin) {
		originX = x;
		originY = y;
		setOrigin = false;
	}

	if (doDrag) {
		redrawLines();
		context.beginPath();
		context.moveTo(originX, originY);
		context.lineTo(x, y);
		context.strokeStyle = hex;
		context.stroke();

		currentLine = {
			stroke: context.lineWidth,
			hex: hex,
			coords: [originX, originY, x, y],
		};
	}
}

function startLine() {
	setOrigin = true;
	doDrag = true;
}

function drawLine() {
	doDrag = false;
	originX = -1;
	originY = -1;
	redrawnLines.push(currentLine);
}