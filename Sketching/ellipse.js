var originX = -1; //NOT center X
var originY = -1; //NOT center Y

var setOrigin = false;
var doDrag = false;

var currentEllipse;

function dragEllipse(event) {
	var x = event.clientX - canvas.offsetLeft;
	var y = event.clientY - canvas.offsetTop;

	let hex = document.getElementById("hex").innerHTML;

	if (setOrigin) {
		originX = x;
		originY = y;
		setOrigin = false;
	}

	if (doDrag) {
		leftX = (x > originX)? originX : x;
		rightX = (x > originX)? x : originX;

		topY = (y > originY)? originY : y;
		bottomY = (y > originY)? y : originY;

		radiusX = (rightX - leftX) / 2;
		radiusY = (bottomY - topY) / 2;

		centerX = leftX + radiusX;
		centerY = topY + radiusY;

		redrawLines();
		context.beginPath();

		context.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);

		context.strokeStyle = hex;
		context.stroke();

		currentEllipse = {
			stroke: context.lineWidth,
			hex: hex,
			coords: [centerX, centerY, radiusX, radiusY],
		};
	}
}

function startEllipse() {
	setOrigin = true;
	doDrag = true;
}

function drawEllipse() {
	doDrag = false;
	originX = -1;
	originY = -1;
	redrawnEllipses.push(currentEllipse);
}