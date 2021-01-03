var originX = -1;
var originY = -1;

var setOrigin = false;
var doDrag = false;

var currentRect;

function dragRect(event) {
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
		context.rect(originX, originY, x - originX, y - originY);
		context.strokeStyle = hex;
		context.stroke();

		currentRect = {
			stroke: context.lineWidth,
			hex: hex,
			coords: [originX, originY, x - originX, y - originY],
		}
	}
}

function startRect() {
	setOrigin = true;
	doDrag = true;
}

function drawRect() {
	doDrag = false;
	originX = -1;
	originY = -1;
	redrawnRects.push(currentRect);
}